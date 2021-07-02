import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import Result from '../../types/Result';
import LoadImage from '../helper/LoadImage';
import RatingStars from './RatingStars';
import defaultImg from "../../assets/img/default/person_2-3.svg";
import Genres from '../../types/Genres';

interface Props {
    movie: Result,
    genres: Genres
}

export default function SearchItem(props: Props): ReactElement {

    const movie = props.movie;
    const genres = props.genres;

    function resolveGenre(genreId: number): string | null {
        if (genres !== undefined) {
            const genre = genres.genres.filter(e => e.id === genreId)
            return genre[0].name;
        }
        return null;
    }

    return (
        <div className="SearchItem">
            <Link className="result" to={`/movie/${movie.id}`}>
                <div className="g-width-100 float-left g-mr-30">
                    <LoadImage url={movie.poster_path} size="w92" ratio="aspect-ratio-2-3" />
                </div>
                <div className="d-flex g-pt-15">
                    <h4 className="h6 g-color-black g-mt-2">{movie.title}</h4>
                    <RatingStars rating={movie.vote_average} className="g-ml-10" />
                </div>
                <ul className="list-inline">
                    {movie.genre_ids.map((genreId, index) => {
                        return (
                            <React.Fragment key={genreId}>
                                <li className="list-inline-item mr-0">
                                    <span className="g-color-text g-font-weight-400 ">{resolveGenre(genreId)}</span>
                                </li>
                                {
                                    movie.genre_ids.length !== index + 1
                                        ? <li className="list-inline-item g-color-gray-light-v3 g-mx-8">|</li>
                                        : ''
                                }
                            </React.Fragment>
                        )
                    })}
                </ul>
                <p className="description line-clamp-3">
                    {movie.overview}
                </p>
            </Link>
        </div>
    )
}
