import React, { ReactElement, useEffect, useRef, useState } from 'react'
import useMovieApi from '../../hooks/useMovieApi';
import MovieApi from '../../shared/MovieApi';
import Result from '../../types/Result';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import SearchItem from './SearchItem';
import "./Search.scss";
import Genres from '../../types/Genres';
import LoadingSpinner from '../LoadingSpinner';

interface SearchResult {
    page: number,
    results: Result[],
    total_results: number,
    total_pages: number
}


export default function Search(): ReactElement {

    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResult>();
    const [genres] = useMovieApi<Genres>("get", "genre/movie/list");

    const [isOpen, setIsOpen] = useState(false);

    const onSearch = (search: string) => {
        setSearch(search)
        setIsOpen(true)
        const searchEscaped = search.trim()
        if (searchEscaped.length > 3) {
            MovieApi<SearchResult>('get', `search/movie/?query=${searchEscaped}`, setSearchResults)
        } else {
            setSearchResults(undefined)
        }
    }

    const ref = useRef(null)
    const handleClickOutside = () => {
        setIsOpen(false)
        console.log('clicked outside')
    }
    const handleClickInside = () => {
        setIsOpen(true)
        console.log('clicked inside')
    }
    useOnClickOutside(ref, handleClickOutside)

    if (!genres) return <LoadingSpinner />

    return (

        <div className="Search" ref={ref}>

            <input value={search} onFocus={handleClickInside} onChange={(e) => onSearch(e.target.value)} type="text" className="form-control u-shadow-v19 g-brd-none g-bg-white g-font-size-16 g-rounded-30 g-px-30 g-py-13 g-mb-30" placeholder="Schnellsuche …" />

            {isOpen && searchResults && searchResults.results.length === 0
                ? <div className="results visible">
                    <span className="result">Keine Filme gefunden</span>
                </div>
                : ''
            }

            {isOpen && searchResults && searchResults.results.length > 0
                ? <div id="results" className="results visible" >
                    <div className="row no-gutters">
                        {searchResults.results.map(result =>
                            <div className="col-md-6" key={result.id}>
                                <SearchItem movie={result} genres={genres} />
                            </div>
                        )}
                    </div>
                </div>
                : ''
            }
        </div>

    )
}
