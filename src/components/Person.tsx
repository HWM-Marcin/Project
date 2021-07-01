import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import useMovieApi from '../hooks/useMovieApi';
import IPerson from "../types/Person"
import FavoriteButtonPerson from './commons/FavoriteButtonPerson';
import Panel from './commons/Panel';
import LoadImage from './helper/LoadImage';
import LoadingSpinner from './LoadingSpinner';
import PersonMovieCredits from './PersonMovieCredits';


export default function Person(): ReactElement {

    const params = useParams<{ id: string }>();
    const [person, setPerson] = useMovieApi<IPerson>("get", `person/${params.id}`);
    useDocumentTitle(person?.name)

    if (!person) return <LoadingSpinner />

    function formatDateString(date: string | undefined): string | null {
        if (date) {
            return new Date(date).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })
        }
        return null;
    }

    function getAge(birthday: string | null | undefined): number | null {
        if (!birthday) return null;
        const birthdayAsDate = new Date(birthday)
        const ageDifMs = Date.now() - birthdayAsDate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (
        <div className="Person">
            <Panel className="g-mb-15">
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <LoadImage url={person.profile_path} size="h632" />
                    </div>
                    <div className="col-md-8 col-lg-9 g-px-80--lg g-mb-40 g-mb-0--md pt-5">
                        <div className="d-flex g-mb-30">
                            <h1 className="mb-0">
                                {person.name}
                            </h1>

                            <div className="g-pt-12">
                                {person.gender === 2
                                    ? <span className="g-font-size-12 u-label g-bg-bluegray g-font-weight-600 g-rounded-20 g-px-8 g-py-5 g-ml-15"><i className="icon-symbol-male"></i></span>
                                    : person.gender === 1
                                        ? <span className="g-font-size-12 u-label g-bg-bluegray g-font-weight-600 g-rounded-20 g-px-8 g-py-5 g-ml-15"><i className="icon-symbol-female"></i></span>
                                        : null
                                }
                                {person.birthday
                                    ? <span className="g-font-size-13 u-label g-bg-bluegray g-rounded-20 g-px-8 g-py-5 g-ml-5">{getAge(person.birthday ? person.birthday : null)} Jahre</span>
                                    : null
                                }
                            </div>

                            <FavoriteButtonPerson person={person} className="ml-auto g-pt-6" />

                        </div>
                        <h2 className="h5">Biografie</h2>
                        <p className="line-clamp-5">{person.biography ? person.biography : 'Leider keine Biografie vorhanden'}</p>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <h2 className="h5">Geburtsort</h2>
                                <p>{person.place_of_birth ? person.place_of_birth : "n/v"}</p>
                            </div>
                            <div className="col-lg-4">
                                <h2 className="h5">Geburtstag</h2>
                                <p>{person.birthday ? formatDateString(person.birthday) : "n/v"}</p>
                            </div>
                            <div className="col-lg-4">
                                <h2 className="h5">Beliebtheit</h2>
                                <p>{person.popularity ? person.popularity : "n/v"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Panel>

            <Panel>
                <PersonMovieCredits personId={person.id} title="Rollen" />
            </Panel>
        </div>
    )
}
