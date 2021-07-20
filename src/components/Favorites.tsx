import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../Store';
import FavoriteButton from './commons/FavoriteButton';
import GenreList from './commons/GenreList';
import LoadImage from './helper/LoadImage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import FavoriteButtonPerson from './commons/FavoriteButtonPerson';
import { TabPanel, Tab } from './commons/TabPanel';
import Panel from './commons/Panel';

export default function Favorites(): ReactElement {

    const { dispatch, store } = useStore();

    useDocumentTitle("Favoriten")

    return (
        <TabPanel>
            <Tab label="Filme">
                <Panel>
                    <div className="TabPanelItem">
                        <div className="d-flex">
                            <h2 className="h3 g-mb-15"><i className="icon-film g-mr-5"></i> Filme</h2>
                            <div>
                                <span className="u-label g-bg-primary g-rounded-20 g-px-8 g-ml-10 g-mt-5">{store.movieFavorites.length}</span>
                            </div>
                        </div>
                        <div className="row">
                            {store.movieFavorites.length === 0
                                ? <div className="col-md-12"><div className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">Keine Filme gemerkt</div></div>
                                : store.movieFavorites.map((favorite, index) =>
                                    <div className="col-md-6" key={index}>
                                        <div className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                                            <div className="g-width-120 g-mr-15">
                                                <LoadImage url={favorite.poster_path} size="h632" className="d-flex w-100" ratio="aspect-ratio-2-3" />
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
            </Tab>

            <Tab label="Personen">
                <Panel>
                    <div className="TabPanelItem">
                        <div className="d-flex">
                            <h2 className="h3 g-mb-15"><i className="icon-people g-mr-5"></i> Personen</h2>
                            <div>
                                <span className="u-label g-bg-primary g-rounded-20 g-px-8 g-ml-10 g-mt-5">{store.personFavorites.length}</span>
                            </div>
                        </div>
                        <div className="row">
                            {store.personFavorites.length === 0
                                ? <div className="col-md-12"><div className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">Keine Personen gemerkt</div></div>
                                : store.personFavorites.map((favorite, index) =>
                                    <div className="col-md-6" key={index}>
                                        <div className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                                            <div className="g-width-120 g-mr-15">
                                                <LoadImage url={favorite.profile_path} size="h632" className="d-flex w-100" ratio="aspect-ratio-2-3" />
                                            </div>
                                            <div className="media-body align-self-center">
                                                <h4 className="h4 g-mb-7">
                                                    <Link to={`/person/${favorite.id}`} className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">{favorite.name}</Link>
                                                </h4>
                                                <FavoriteButtonPerson person={favorite} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Panel>
            </Tab>
        </TabPanel>
    )
}
