import React, { ReactElement } from 'react'
import useMovieApi from '../hooks/useMovieApi';
import LoadingSpinner from './LoadingSpinner';
import Popular from '../types/Popular';
import ResultListItem from './ResultListItem';

export default function PopularList(): ReactElement {

    const [movies, setMovies] = useMovieApi<Popular>("get", "movie/popular");

    if (!movies) {
        return <LoadingSpinner />
    }

    return (
        <div className="Popular">
            {movies.results.map(result => <ResultListItem key={result.id} result={result} />)}
        </div>
    )
}
