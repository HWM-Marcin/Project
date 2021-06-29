import React, { ReactElement, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { initialStore, reducer, StoreProvider } from '../Store';
import Layout from './Layout';
import Navigation from './Navigation';
import Routes from './Routes';

export default function App(): ReactElement {

    const [store, dispatch] = useReducer(reducer, initialStore)

    return (
        <div className="App">
            <StoreProvider>
                <Router>
                    <Navigation />
                    <Layout>
                        <Routes />
                    </Layout>
                </Router>
            </StoreProvider>
        </div>
    )
}
