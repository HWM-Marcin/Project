import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router'
import Movie from './MovieDetails'
import PopularList from './PopularList'

export default function Routes(): ReactElement {
    return (
        <Switch>
            <Route path="/movie/:id" component={Movie} />
            <Route path="/" component={PopularList} />
        </Switch>
    )
}
