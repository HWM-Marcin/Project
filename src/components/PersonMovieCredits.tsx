import React, { ReactElement } from 'react'
import useMovieApi from '../hooks/useMovieApi';
import PersonMovieCredit from '../types/PersonMovieCredit';
import LoadingSpinner from './LoadingSpinner';
import PersonMovieCreditsItem from './PersonMovieCreditsItem';

interface Props {
    personId: number | undefined,
    title?: string
}

export default function PersonMovieCredits(props: Props): ReactElement {

    const [movies, setMovies] = useMovieApi<PersonMovieCredit>("get", `person/${props.personId}/movie_credits`);

    console.log(movies)

    if (!movies) return <LoadingSpinner />

    return (

        <div className="PersonMovieCredits">
            {props.title ? <h2 className="h3 g-mb-30">{props.title}</h2> : null}
            <div className="row">
                {movies.cast.map(movie =>
                    <PersonMovieCreditsItem key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    )
}
