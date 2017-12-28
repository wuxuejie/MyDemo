import 'core-js/fn/object/assign';
import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import '../static/styles/main.scss';

import reducer from '../reducers';


import AppRoutes from './AppRoutes';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <AppRoutes />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
