import React, { useContext, useReducer } from 'react';
import { ReactElement } from 'react';
import Movie from './types/Movie';
import PageConfig from "./types/PageConfig"

export interface Store {
    pageConfig: PageConfig,
    favorites: Movie[]

}

export const initialStore: Store = {
    pageConfig: {
        image_url: "https://image.tmdb.org/t/p",
        certificationArea: "DE"
    },
    favorites: [],
}

interface addToFavorites {
    type: 'ADD_TO_FAVORITES',
    movie: Movie
}

interface removeFromFavorites {
    type: 'REMOVE_FROM_FAVORITES',
    movie: Movie
}

type Actions = addToFavorites | removeFromFavorites;

export type dispatchActions = React.Dispatch<Actions>

export function reducer(store: Store, action: Actions): Store {
    switch (action.type) {
        case 'ADD_TO_FAVORITES': {
            return { ...store, favorites: [...store.favorites, action.movie] };
        }
        case 'REMOVE_FROM_FAVORITES': {
            const index = store.favorites.map(movie => movie.id).indexOf(action.movie.id)
            return { ...store, favorites: store.favorites.filter((_movie, i) => i !== index) };
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
