// import { combineReducers } from 'redux';
import appleBasketReducer from './appleBasket';
import bannerReducer from './banner';
import register from './register';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineForms } from 'react-redux-form';

const rootReducer = combineForms({
    appleBasket: appleBasketReducer,
    banners: bannerReducer,
    register: register,
    form: formReducer,
    router: routerReducer,
    user: register
});

export default rootReducer;