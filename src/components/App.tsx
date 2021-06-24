import React, { ReactElement, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.scss";
import Layout from './Layout';
import Navigation from './Navigation';
import PopularList from './PopularList';
import Routes from './Routes';

export default function App(): ReactElement {




    return (
        <div className="App">
            <Router>
                <Navigation />
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </div>
    )
}
