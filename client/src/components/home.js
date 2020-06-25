import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardContainer from './dashboard/container';
import NotFound from './common/not-found';

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to the Bachelorette Trivia Game</h1>
      <br />
      <hr />
      <br />
      <Switch>
        <Route exact path="/" component={DashboardContainer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
