import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../Store';
import FavoriteButton from './commons/FavoriteButton';
import GenreList from './commons/GenreList';
import MovieImage from './helper/LoadImage';
import Panel from './commons/Panel'

export default function Favorites(): ReactElement {

    const { dispatch, store } = useStore();

    return (
        <Panel className="g-pa-30">
            <div>
                <h1 className="h2 g-mb-30">Deine Favoriten</h1>
                <div className="row">
                    {store.favorites.length === 0
                        ? <div className="col-md-12"><div className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">Keine Filme gemerkt</div></div>
                        : store.favorites.map((favorite, index) =>
                            <div className="col-md-6" key={index}>
                                <div className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                                    <div className="g-max-width-100 g-mr-15">
                                        <MovieImage url={favorite.poster_path} size="h632" className="d-flex w-100" />
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h4 className="h4 g-mb-7">
                                            <Link to={`/movie/${favorite.id}`} className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">{favorite.title}</Link>
                                        </h4>
                                        <GenreList movie={favorite} />
                                        <FavoriteButton movie={favorite} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Panel>
    )
}
