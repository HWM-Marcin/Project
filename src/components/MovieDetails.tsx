import React, { ReactElement } from 'react'
import { useParams } from 'react-router';
import useMovieApi from '../hooks/useMovieApi';
import Movie from '../types/Movie';
import MovieCertification from './commons/MovieCertification';
import MovieImage from './commons/MovieImage';
import Panel from './commons/Panel';
import LoadingSpinner from './LoadingSpinner';

export default function MovieDetails(): ReactElement {


    const params = useParams<{ id: string }>();
    const [movie, setMovie] = useMovieApi<Movie>("get", `movie/${params.id}`);

    if (!movie) {
        return <LoadingSpinner />
    }

    return (
        <div className="Movie">

            <Panel>
                <div className="row align-items-center">
                    <div className="col-md-4 col-lg-3">
                        <MovieImage url={movie.poster_path} size="h632" />
                    </div>
                    <div className="col-md-8 col-lg-9 g-px-80--lg g-mb-40 g-mb-0--md">
                        <h1 className="d-flex">{movie.title} <MovieCertification movieId={movie.id} /></h1>
                        <ul className="list-inline">
                            {movie.genres.map((genre, index) => {
                                return (
                                    <React.Fragment key={genre.id}>
                                        <li className="list-inline-item g-mx-4">
                                            <a className="g-color-text g-color-primary--hover g-font-weight-400 g-text-underline--none--hover" href="">{genre.name}</a>
                                        </li>
                                        {
                                            movie.genres.length !== index + 1
                                                ? <li className="list-inline-item g-color-gray-light-v3 g-mx-4">|</li>
                                                : ''
                                        }
                                    </React.Fragment>
                                )
                            }
                            )}
                            <li className="list-inline-item g-color-text g-ml-10">
                                <i className="icon-communication-131 u-line-icon-pro"></i> {movie.runtime}m
                            </li>
                        </ul>
                        <p>{movie.overview}</p>
                    </div>
                </div>



            </Panel>
        </div>
    )
}
