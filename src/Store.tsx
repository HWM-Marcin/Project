import React, { useContext, useReducer } from 'react';
import { ReactElement } from 'react';
import Movie from './types/Movie';
import PageConfig from "./types/PageConfig"
import Person from './types/Person';

export interface Store {
    pageConfig: PageConfig,
    movieFavorites: Movie[],
    personFavorites: Person[]
}

export const initialStore: Store = {
    pageConfig: {
        image_url: "https://image.tmdb.org/t/p",
        certificationArea: "DE"
    },
    movieFavorites: [],
    personFavorites: []
}

interface addMovieToFavorites {
    type: 'ADD_MOVIE_TO_FAVORITES',
    movie: Movie
}

interface removeMovieFromFavorites {
    type: 'REMOVE_MOVIE_FROM_FAVORITES',
    movie: Movie
}

interface addPersonToFavorites {
    type: 'ADD_PERSON_TO_FAVORITES',
    person: Person
}

interface removePersonFromFavorites {
    type: 'REMOVE_PERSON_FROM_FAVORITES',
    person: Person
}

type Actions = addMovieToFavorites | removeMovieFromFavorites | addPersonToFavorites | removePersonFromFavorites;

export type dispatchActions = React.Dispatch<Actions>

export function reducer(store: Store, action: Actions): Store {
    switch (action.type) {
        case 'ADD_MOVIE_TO_FAVORITES': {
            return { ...store, movieFavorites: [...store.movieFavorites, action.movie] };
        }
        case 'REMOVE_MOVIE_FROM_FAVORITES': {
            const index = store.movieFavorites.map(movie => movie.id).indexOf(action.movie.id)
            return { ...store, movieFavorites: store.movieFavorites.filter((_movie, i) => i !== index) };
        }
        case 'ADD_PERSON_TO_FAVORITES': {
            return { ...store, personFavorites: [...store.personFavorites, action.person] };
        }
        case 'REMOVE_PERSON_FROM_FAVORITES': {
            const index = store.personFavorites.map(person => person.id).indexOf(action.person.id)
            return { ...store, personFavorites: store.personFavorites.filter((_person, i) => i !== index) };
        }
        default:
            return store;
    }
}


interface StoreContext {
    store: Store,
    dispatch: dispatchActions
}

const StoreContext = React.createContext({} as StoreContext);

export const useStore = (): StoreContext => useContext(StoreContext);

export function StoreProvider(props: { children: ReactElement }): ReactElement {
    const [store, dispatch] = useReducer(reducer, initialStore)
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    )
}
