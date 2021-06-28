import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../Store';
import Movie from '../types/Movie';
import GenreList from './commons/GenreList';
import MovieImage from './commons/MovieImage';
import Panel from './commons/Panel'

export default function Favorites(): ReactElement {

    const { dispatch, store } = useStore();

    const favorites = store.favorites.reduce((acc: Movie[], movie) => {
        acc.find(movie_ => movie_.id === movie.id) || acc.push(movie)
        return acc
    }, [])
        .sort((movieA, movieB) => Number(movieA.id) - Number(movieB.id))

    function removeFromFavorites(movie: Movie, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        dispatch({ type: "REMOVE_FROM_FAVORITES", movie })
    }

    return (
        <Panel>
            <div>
                <h1 className="h2 mb-5">Favoriten</h1>
                <div className="row">
                    {favorites.map((favorite, index) =>
                        <div className="col-md-6" key={index}>
                            <div className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                                <div className="g-max-width-100 g-mr-15">
                                    <MovieImage url={favorite.poster_path} size="h632" className="d-flex w-100" />
                                </div>
                                <div className="media-body align-self-center">
                                    <h4 className="h4 g-mb-7">
                                        <Link to={`/movie/${favorite.id}`} className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">Glasses</Link>
                                    </h4>
                                    <GenreList movie={favorite} />
                                    <button className="btn u-btn-primary" onClick={e => removeFromFavorites(favorite, e)}>entfernen</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Panel>
    )
}
