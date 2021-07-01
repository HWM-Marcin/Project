import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo/logo.svg";
import { useStore } from '../Store';

export default function Navigation(): ReactElement {

    const { dispatch, store } = useStore();

    const countFavorites = store.movieFavorites.length + store.personFavorites.length

    return (
        <div className="Navigation">
            <header id="js-header" className="u-header u-header--static u-shadow-v19">

                <div className="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10">
                    <nav className="js-mega-menu navbar navbar-expand-lg">
                        <div className="container">
                            <button className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-3 g-right-0" type="button"
                                aria-label="Toggle navigation"
                                aria-expanded="false"
                                aria-controls="navBar"
                                data-toggle="collapse"
                                data-target="#navBar">
                                <span className="hamburger hamburger--slider g-pr-0">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </span>
                            </button>

                            <Link to="/" className="navbar-brand">
                                <img className="App-logo" src={logo} alt="Logo" height="50" />
                                <span className="g-color-black">TheMovieDB+</span>
                            </Link>

                            <div id="navBar" className="collapse navbar-collapse align-items-center flex-sm-row g-pt-15 g-pt-0--lg">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item g-ml-15--xl">
                                        <Link to="/" className="nav-link text-uppercase g-color-primary--hover g-pl-5 g-pr-0 g-py-20">Beliebt</Link>
                                    </li>
                                    <li className="nav-item g-ml-10--lg">
                                        <Link to="/favorites" className="nav-link text-uppercase g-color-primary--hover g-pl-5 g-pr-0 g-py-20">
                                            Favoriten
                                            <span className="u-label g-bg-primary g-rounded-20 g-px-8 g-ml-10">{countFavorites}</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header >
        </div >
    )
}
