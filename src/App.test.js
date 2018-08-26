import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HashRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </HashRouter>
    , div);
});
