import { fromJS } from 'immutable';  // 为什么immutable 没写入package.json 好奇怪
import { AppleBasket, Apple } from './type';
import { ActionEnum } from './actions';
// import { FormReducerMapObject,FormStateMap } from 'redux-form';
// import { Reducer } from 'redux';

const defaultState: AppleBasket = {
    isPicking: false,
    newAppleId: 0,
    apples: []
};

export default (state: AppleBasket = defaultState, action: { type: ActionEnum, payload: any }) => {
    if (!state) return;

    switch (action.type) {
        case ActionEnum.BEGIN_PICK_APPLE:
            state.isPicking = true;
            break;
        case ActionEnum.DONE_PICK_APPLE:
            let newApple = {
                id: state.newAppleId,
                weight: action.payload,
                isEaten: false
            };
            state.apples.push(newApple);
            state.newAppleId++;
            state.isPicking = false;
            break;
        case ActionEnum.FAIL_PICK_APPLE:
            state.isPicking = false;
            break;

        case ActionEnum.EAT_APPLE:
            let eatItem = <Apple>state.apples.find(p => p.id == action.payload);
            if (eatItem) eatItem.isEaten = true;
            break;

        default:
            return state;
    }
    return fromJS(state).toJS();
};
