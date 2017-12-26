import 'core-js/fn/object/assign';
import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import '../static/styles/main.scss';

import reducer from '../reducers';
import AppleBasket from './appleBasket';
import Register from './register';
import Demo from '../apps/routes/Demo';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={AppleBasket} />
            <Route exact={true} path="/Demo" component={Demo} />
            <Route exact={true} path="/Register" component={Register} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
