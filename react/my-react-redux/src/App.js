import 'core-js/fn/object/assign';
import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './apps/styles/main.scss';

import reducer from './apps/components/reducers';
import AppleBasket from './apps/routes/AppleBasket';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={AppleBasket}/>
        </Switch>
      </Router>
    </Provider>
    );
  }
}

export default App;
