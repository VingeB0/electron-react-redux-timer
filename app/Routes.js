/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './components/HomePage';
// import CounterPage from './containers/CounterPage';
import CounterPage from './containers/CounterPage';
import LoginPage from './components/LoginPage';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/counter" component={CounterPage} />
      {/*<Route path={routes.HOME} component={HomePage} />*/}
      <Route exact path="/home" component={HomePage} />
    </Switch>
  </App>
);
