import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useMovieApi from '../../hooks/useMovieApi';
import MovieApi from '../../shared/MovieApi';
import Result from '../../types/Result';
import LoadImage from '../helper/LoadImage';
import RatingStars from './RatingStars';
import defaultImg from "../../assets/img/default/person_2-3.svg";
import "./Search.scss";
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface SearchResult {
    page: number,
    results: Result[],
    total_results: number,
    total_pages: number
}

interface Genres {
    genres: [
        {
            id: number,
            name: string
        }
    ]
}


export default function Search(): ReactElement {

    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResult>();

    const [genres, setGenres] = useMovieApi<Genres>("get", "genre/movie/list");

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

    const onFocus = () => {
        if (!searchResults) {
            MovieApi<SearchResult>('get', `search/movie/?query=${search}`, setSearchResults)
        }
    }


    function resolveGenre(genreId: number): string | null {
        if (genres !== undefined) {
            const genre = genres.genres.filter(e => e.id === genreId)
            return genre[0].name;
        }
        return null;
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
                                <Link className="result" to={`/movie/${result.id}`}>
                                    <div className="g-width-100 float-left g-mr-30">
                                        <div className="aspect-ratio aspect-ratio-2-3">
                                            {result.poster_path
                                                ? <LoadImage url={result.poster_path} size="w92" />
                                                : <img src={defaultImg} />
                                            }
                                            <LoadImage url={result.poster_path} size="w92" />
                                        </div>
                                    </div>
                                    <div className="d-flex g-pt-15">
                                        <h4 className="h6 g-color-black g-mt-2">{result.title}</h4>
                                        <RatingStars rating={result.vote_average} className="g-ml-10" />
                                    </div>
                                    <ul className="list-inline">
                                        {result.genre_ids.map((genreId, index) => {
                                            return (
                                                <React.Fragment key={genreId}>
                                                    <li className="list-inline-item mr-0">
                                                        <span className="g-color-text g-font-weight-400 ">{resolveGenre(genreId)}</span>
                                                    </li>
                                                    {
                                                        result.genre_ids.length !== index + 1
                                                            ? <li className="list-inline-item g-color-gray-light-v3 g-mx-8">|</li>
                                                            : ''
                                                    }
                                                </React.Fragment>
                                            )
                                        })}
                                    </ul>
                                    <p className="description line-clamp-3">
                                        {result.overview}
                                    </p>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                : ''
            }
        </div>

    )
}
