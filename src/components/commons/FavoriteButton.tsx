import React, { ReactElement, useEffect, useRef } from 'react'
import { useStore } from '../../Store';
import Movie from '../../types/Movie';

interface Props {
    movie: Movie,
    className?: string
}

export default function FavoriteButton(props: Props): ReactElement | null {

    const movie = props.movie;
    const { dispatch, store } = useStore();

    let alreadyAdded = false;

    function removeMovieFromFavorites(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITES", movie })
    }


    function addMovieToFavorites() {
        dispatch({ type: "ADD_MOVIE_TO_FAVORITES", movie })
    }

    function isAlreadyAdded() {
        for (let i = 0; i < store.movieFavorites.length; i++) {
            if (store.movieFavorites[i].id === movie.id) {
                alreadyAdded = true
            }
        }
        return alreadyAdded
    }

    return (
        <div className={`FavoriteButton ${props.className ? props.className : ''}`}>
            {isAlreadyAdded()
                ? <button className="btn u-btn-black rounded" onClick={e => removeMovieFromFavorites(e)}>Film gemerkt</button>
                : <button className="btn u-btn-outline-black rounded" onClick={addMovieToFavorites}>Film merken</button>}
        </div>
    )
}
