
import * as React from 'react';
import { Route } from 'react-router';
import AppleBasket from './appleBasket';
import Register from './register';
import Demo from '../apps/routes/Demo';
import Home from './home';


export default class AppRoutes extends React.Component {
    render() {
        return (            
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/AppleBasket" component={AppleBasket} />
          <Route exact={true} path="/Demo" component={Demo} />
          <Route exact={true} path="/Register" component={Register} />
        </div>
        );
    }
}

// interface AppRoutes extends Array<{
//     path: string,
//     component: any,
//     exact: boolean
// }> {}

// let appRoutes: AppRoutes;

// appRoutes = [
//     { path: './', component: Home, exact: true },
//     { path: './AppleBasket', component: AppleBasket, exact: true },
//     { path: './Demo', component: Demo, exact: true },
//     { path: './Register', component: Register, exact: true },
// ]
// export default appRoutes;