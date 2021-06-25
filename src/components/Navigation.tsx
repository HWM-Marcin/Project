import React, { ReactElement } from 'react'

export default function Navigation(): ReactElement {
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

                            <a className="navbar-brand" href="home-page-1.html">
                                <img src="assets/img/logo/logo-1.png" alt="Image Description" />
                            </a>

                            <div id="navBar" className="collapse navbar-collapse align-items-center flex-sm-row g-pt-15 g-pt-0--lg">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item g-ml-15--xl">
                                        <a className="nav-link text-uppercase g-color-primary--hover g-pl-5 g-pr-0 g-py-20" href="../index.html">Main</a>
                                    </li>
                                    <li className="nav-item g-ml-10--lg">
                                        <a className="nav-link text-uppercase g-color-primary--hover g-pl-5 g-pr-0 g-py-20" href="../index.html">Main</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}
