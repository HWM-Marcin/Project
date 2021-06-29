import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { PersonMovieCreditCast } from '../types/PersonMovieCredit'
import LoadImage from './helper/LoadImage';
import defaultImg from "../assets/img/default/person_2-3.svg";


interface Props {
    movie: PersonMovieCreditCast
}

export default function PersonMovieCreditsItem(props: Props): ReactElement {

    const movie = props.movie;

    return (
        <article className="PersonMovieCreditsItem col-sm-6 col-md-4 col-lg-3 g-px-10 g-mb-30">
            <div className="aspect-ratio aspect-ratio-2-3">
                {movie.poster_path
                    ? <Link to={`/movie/${movie.id}`}>
                        <LoadImage url={movie.poster_path} size={'h632'} className="rounded" />
                    </Link>
                    : <img src={defaultImg} />
                }
            </div>
            <h4 className="h6 g-color-black mt-2">
                <Link className="u-link-v5 g-color-black g-color-primary--hover" to={`/movie/${movie.id}`}>{movie.title}</Link>
            </h4>
        </article>

    )
}
