import React, { ReactElement } from 'react'
import useMovieApi from '../hooks/useMovieApi';
import LoadingSpinner from './LoadingSpinner';
import Popular from '../types/Popular';
import ResultListItem from './ResultListItem';
import Panel from './commons/Panel';

export default function PopularList(): ReactElement {

    const [movies, setMovies] = useMovieApi<Popular>("get", "movie/popular");

    if (!movies) {
        return <LoadingSpinner />
    }

    return (
        <div className="Popular">

            <Panel>
                <h2 className="h3 g-mb-30">Aktuell beliebte Filme</h2>
                <div className="row">
                    {movies.results.map(result =>
                        <ResultListItem key={result.id} result={result} />
                    )}
                </div>
            </Panel>
        </div>
    )
}
