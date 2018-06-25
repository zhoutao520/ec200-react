import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Boiler from './components/boiler'
import EditPsd from './components/editPsd'
import Facilities from './components/facilities'
import FanCoil from './components/fanCoil'
import Freezer from './components/freezer'
import FreshAir from './components/freshAir'
import Personal from './components/personal'

export default class RoutView extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/boiler" component={Boiler} />
                <Route path="/editPsd" component={EditPsd} />
                <Route path="/facilities" component={Facilities} />
                <Route path="/fanCoil" component={FanCoil} />
                <Route path="/freezer" component={Freezer} />
                <Route path="/freshAir" component={FreshAir} />
                <Route path="/personal" component={Personal} />
            </Switch>
        )
    }
} 