import React, { ReactElement } from 'react'
import { useParams } from 'react-router';
import useMovieApi from '../hooks/useMovieApi';
import Movie from '../types/Movie';
import MovieImage from './commons/MovieImage';
import LoadingSpinner from './LoadingSpinner';

export default function MovieDetails(): ReactElement {


    const params = useParams<{ id: string }>();
    const [movie, setMovie] = useMovieApi<Movie>("get", `movie/${params.id}`);

    if (!movie) {
        return <LoadingSpinner />
    }

    return (
        <div className="Movie">
            {movie.title}

            <MovieImage url={movie.backdrop_path} size="w1280" />

        </div>
    )
}
