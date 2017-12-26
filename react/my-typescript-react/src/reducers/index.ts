import { combineReducers } from 'redux';
import appleBasketReducer from './appleBasket';
import register from './register';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    appleBasket: appleBasketReducer,
    register:register,
    form:formReducer,
});

export default rootReducer;