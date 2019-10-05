import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './_pages/_main'
import Details from './_pages/_details'

const Routes = () =>(
    <BrowserRouter> 
        <Switch>

            <Route exact path='/' component={Main} />
            <Route path='/pokemon/:name' component={Details} />

        </Switch>
    </BrowserRouter>
)

export default Routes;