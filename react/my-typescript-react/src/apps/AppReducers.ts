import { combineReducers } from 'redux';
import appleBasketReducer from './components/appleBasket/reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    appleBasket: appleBasketReducer,
    form:formReducer,
});

export default rootReducer;