import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router'
import Favorites from './Favorites'
import Movie from './MovieDetails'
import PopularList from './PopularList'

export default function Routes(): ReactElement {
    return (
        <Switch>
            <Route path="/favorites" component={Favorites} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/" component={PopularList} />
        </Switch>
    )
}
