import React, { ReactElement } from 'react'
import useMovieApi from '../../hooks/useMovieApi';
import { useStore } from '../../Store';
import Certifications from '../../types/Certifications';
import MovieCertificationItem from './MovieCertificationItem';

interface Props {
    movieId: number
}

interface IReleaseDates {
    id?: number,
    results?: [{
        iso_3166_1?: string,
        release_dates?: [{
            certification?: string,
            iso_639_1?: string,
            release_date?: string,
            type?: number,
            note?: string
        }]
    }]
}

export default function ReleaseDates(props: Props): ReactElement | null {

    const { dispatch, store } = useStore();
    const [releaseDates, setReleaseDates] = useMovieApi<IReleaseDates>("get", `movie/${props.movieId}/release_dates`);

    if (!releaseDates || !releaseDates.results || !store) return null

    //releaseDates.results.map(e => console.log(e))

    const filteredReleasedDatesByLanguage = releaseDates.results.filter(e => e.iso_3166_1 === store.pageConfig.certificationArea);

    function formatDateString(date: string | undefined): string | null {
        if (date) {
            return new Date(date).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })
        }
        return null;
    }

    return (
        <div className="ReleaseDates">
            {filteredReleasedDatesByLanguage.map((e, i) =>
                <div key={i}>
                    {e.release_dates?.map((ee, ii) =>
                        <div className="row" key={ii}>
                            <div className="col-md">
                                <p>Region: {e.iso_3166_1}</p>
                            </div>
                            <div className="col-md">
                                <p>Datum: {formatDateString(ee.release_date)}</p>
                            </div>
                            <div className="col-md">
                                <p>Altersfreigabe: <MovieCertificationItem type={ee.type} /></p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}