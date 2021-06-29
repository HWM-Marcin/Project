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

    function removeFromFavorites(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        dispatch({ type: "REMOVE_FROM_FAVORITES", movie })
    }


    function addToFavorites() {
        dispatch({ type: "ADD_TO_FAVORITES", movie })
    }

    function isAlreadyAdded() {
        for (let i = 0; i < store.favorites.length; i++) {
            if (store.favorites[i].id === movie.id) {
                alreadyAdded = true
            }
        }
        return alreadyAdded
    }

    return (
        <div className={`FavoriteButton ${props.className ? props.className : ''}`}>
            {isAlreadyAdded()
                ? <button className="btn u-btn-black rounded" onClick={e => removeFromFavorites(e)}>Film gemerkt</button>
                : <button className="btn u-btn-outline-black rounded" onClick={addToFavorites}>Film merken</button>}
        </div>
    )
}
