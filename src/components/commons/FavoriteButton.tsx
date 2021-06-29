import React, { ReactElement, useEffect, useRef } from 'react'
import { useStore } from '../../Store';
import Movie from '../../types/Movie';

interface Props {
    movie: Movie
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
        <div className="FavoriteButton">
            {isAlreadyAdded()
                ? <button className="btn u-btn-primary" onClick={e => removeFromFavorites(e)}><i className="icon-heart mr-2"></i> Film nicht mehr merken</button>
                : <button className="btn u-btn-primary" onClick={addToFavorites}><i className="icon-heart mr-2"></i> Film merken</button>}
        </div>
    )
}
