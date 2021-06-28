import React, { ReactElement, useEffect } from 'react'
import { useParams } from 'react-router';
import useMovieApi from '../hooks/useMovieApi';
import Movie from '../types/Movie';
import MovieCertification from './commons/MovieCertification';
import MovieImage from './commons/MovieImage';
import Panel from './commons/Panel';
import LoadingSpinner from './LoadingSpinner';
import RatingCircle from './commons/RatingCircle';
import Keywords from './commons/Keywords';
import ReleaseDates from './commons/ReleaseDates';
import { useStore } from '../Store';
import GenreList from './commons/GenreList';

export default function MovieDetails(): ReactElement {

    const { dispatch, store } = useStore();
    const params = useParams<{ id: string }>();
    const [movie, setMovie] = useMovieApi<Movie>("get", `movie/${params.id}`);

    if (!movie) {
        return <LoadingSpinner />
    }

    const onAddToFavorites = () => {
        dispatch({ type: "ADD_TO_FAVORITES", movie })
    }

    return (
        <div className="Movie">

            <Panel className="g-mb-15">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <MovieImage url={movie.poster_path} size="h632" />
                    </div>
                    <div className="col-md-8 col-lg-8 g-px-80--lg g-mb-40 g-mb-0--md pt-5">
                        <h1 className="d-flex">{movie.title} <MovieCertification movieId={movie.id} /></h1>
                        <GenreList movie={movie} />
                        <p>{movie.overview}</p>
                        <div className="row mt-5">
                            <div className="col-md mb-2">
                                <h6>Beliebtheit</h6>
                                <p>{movie.vote_average} / 10</p>
                            </div>
                            <div className="col-md mb-2">
                                <h6>Status</h6>
                                <p>{movie.status}</p>
                            </div>
                            <div className="col-md mb-2">
                                <h6>Orignalsprache</h6>
                                <p>{movie.original_language}</p>
                            </div>
                            <div className="col-md mb-2">
                                <h6>Budget</h6>
                                <p>{movie.budget} USD</p>
                            </div>
                            <div className="col-md mb-2">
                                <h6>Umsatz</h6>
                                <p>{movie.revenue} USD</p>
                            </div>
                        </div>

                        <h6 className="mt-3 mb-3">Veröffentlichungen</h6>
                        <ReleaseDates movieId={movie.id} />

                        <h6 className="mt-3">Keywords</h6>
                        <Keywords movieId={movie.id} />

                        <button className="btn u-btn-primary" onClick={onAddToFavorites}>merken</button>
                    </div>
                </div>
            </Panel>


        </div>
    )
}
