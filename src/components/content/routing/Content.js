import React from 'react';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Page from './Page'

function Content() {
  	return (
            <Switch>
                <Route exact path = '/'>
                    <Redirect to = '/general'/>
                </Route>
                <Route exact path = '/general'>
                    <Page endpoint = 'general'/>
                </Route>
                <Route exact path = '/business'>
                    <Page endpoint = 'business'/>
                </Route>
                <Route exact path = '/sports'>
                    <Page endpoint = 'sports'/>
                </Route>
                <Route exact path = '/entertainment'>
                    <Page endpoint = 'entertainment'/>
                </Route>
                <Route exact path = '/technology'>
                    <Page endpoint = 'technology'/>
                </Route>
                <Route exact path = '/science'>
                    <Page endpoint = 'science'/>
                </Route>
                <Route exact path = '/health'>
                    <Page endpoint = 'health'/>
                </Route>
            </Switch>
  	);
}

export default Content;
