import React, { ReactElement, useEffect, useRef } from 'react'
import { useStore } from '../../Store';
import Person from '../../types/Person';

interface Props {
    person: Person,
    className?: string
}

export default function FavoriteButtonPerson(props: Props): ReactElement | null {

    const person = props.person;
    const { dispatch, store } = useStore();

    let alreadyAdded = false;

    function removeFromFavorites(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        dispatch({ type: "REMOVE_PERSON_FROM_FAVORITES", person })
    }


    function addToFavorites() {
        dispatch({ type: "ADD_PERSON_TO_FAVORITES", person })
    }

    function isAlreadyAdded() {
        for (let i = 0; i < store.personFavorites.length; i++) {
            if (store.personFavorites[i].id === person.id) {
                alreadyAdded = true
            }
        }
        return alreadyAdded
    }

    return (
        <div className={`FavoriteButton ${props.className ? props.className : ''}`}>
            {isAlreadyAdded()
                ? <button className="btn u-btn-black rounded" onClick={e => removeFromFavorites(e)}>Person gemerkt</button>
                : <button className="btn u-btn-outline-black rounded" onClick={addToFavorites}>Person merken</button>}
        </div>
    )
}
