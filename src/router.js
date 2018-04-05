import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './comps/home/Home';

export default(

    <Switch>
        <Route component={Home} path='/' exact/>
    </Switch>
)