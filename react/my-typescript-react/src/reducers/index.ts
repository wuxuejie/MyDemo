import { combineReducers } from 'redux';
import appleBasketReducer from './appleBasket';
import bannerReducer from './banner';
import register from './register';
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    appleBasket: appleBasketReducer,
    banners: bannerReducer,
    register: register,
    form: formReducer,
    router: routerReducer
});

export default rootReducer;