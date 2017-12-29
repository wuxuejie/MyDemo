
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRoutes from './containers/AppRoutes';
import registerServiceWorker from './registerServiceWorker';
import 'core-js/fn/object/assign';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './static/styles/main.scss';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <AppRoutes />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
