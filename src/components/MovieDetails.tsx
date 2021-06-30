import React, { ReactElement, useEffect } from 'react'
import { useParams } from 'react-router';
import useMovieApi from '../hooks/useMovieApi';
import Movie from '../types/Movie';
import MovieCertification from './commons/MovieCertification';
import Panel from './commons/Panel';
import LoadingSpinner from './LoadingSpinner';
import Keywords from './commons/Keywords';
import ReleaseDates from './commons/ReleaseDates';
import GenreList from './commons/GenreList';
import FavoriteButton from './commons/FavoriteButton';
import CreditList from './commons/CreditList';
import LoadImage from './helper/LoadImage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import RatingStars from './commons/RatingStars';

export default function MovieDetails(): ReactElement {

    const params = useParams<{ id: string }>();
    const [movie, setMovie] = useMovieApi<Movie>("get", `movie/${params.id}`);
    useDocumentTitle(movie?.title)

    if (!movie) {
        return <LoadingSpinner />
    }

    return (
        <div className="Movie">

            <Panel className="g-mb-15">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <LoadImage url={movie.poster_path} size="h632" />
                    </div>
                    <div className="col-md-8 col-lg-8 pt-5">
                        <div className="d-flex mb-2">
                            <h1 className="mb-0">{movie.title}</h1>
                            <div className="d-flex ml-auto">
                                <MovieCertification movieId={movie.id} className="g-mt-6 mr-3" />
                                <FavoriteButton movie={movie} className="g-mt-6" />
                            </div>
                        </div>
                        <GenreList movie={movie} />
                        <p>{movie.overview}</p>
                        <div className="row mt-5">
                            <div className="col-md mb-2">
                                <h6>Beliebtheit</h6>
                                <RatingStars rating={movie.vote_average} />
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


                    </div>
                </div>
            </Panel>

            <Panel>
                <CreditList movieId={movie.id} title="Cast" />
            </Panel>


        </div>
    )
}
