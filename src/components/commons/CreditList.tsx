import React, { ReactElement } from 'react';
import useMovieApi from '../../hooks/useMovieApi';
import CreditListItem from './CreditListItem';

interface Props {
    movieId: number,
    title?: string
}

interface Credit {
    id?: number,
    cast?: Credit[]
}

export default function CreditList(props: Props): ReactElement | null {

    const [credits, setCredits] = useMovieApi<Credit>("get", `movie/${props.movieId}/credits`);

    if (!credits) return null;

    return (

        <>
            {credits.cast
                ?
                <div className="CreditList">
                    {props.title ? <h2 className="h3 g-mb-30">{props.title}</h2> : null}
                    <div className="row">
                        {credits.cast.map(credit =>
                            <React.Fragment key={credit.id}>
                                <CreditListItem credit={credit} className="col-md-2 g-mb-30" />
                            </React.Fragment>
                        )}
                    </div>
                </div>
                : null
            }
        </>
    )
}
