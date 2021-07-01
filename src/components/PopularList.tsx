import React, { ReactElement } from 'react'
import useMovieApi from '../hooks/useMovieApi';
import LoadingSpinner from './LoadingSpinner';
import Popular from '../types/Popular';
import ResultListItem from './ResultListItem';
import Panel from './commons/Panel';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Search from './commons/Search';
import Tabs from './commons/Tabs';
import TabPanel from './commons/TabPanel';

export default function PopularList(): ReactElement {

    useDocumentTitle("Beliebte Filme")

    const [movies, setMovies] = useMovieApi<Popular>("get", "movie/popular");

    if (!movies) {
        return <LoadingSpinner />
    }



    return (
        <div className="Popular">

            <Search />

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
