import { fromJS } from 'immutable';  // 为什么immutable 没写入package.json 好奇怪
import { AppleBasket, Apple } from './type';
import { handleActions } from 'redux-actions';

// import { FormReducerMapObject,FormStateMap } from 'redux-form';
// import { Reducer } from 'redux';

const defaultState: AppleBasket = {
    isPicking: false,
    newAppleId: 0,
    apples: []
};

export default handleActions<AppleBasket, { type: string, payload: any }>({
    BEGIN_PICK_APPLE: (state, action) => ({...state, isPicking: true }),
    DONE_PICK_APPLE: (state, action) => {
        let newApple = {
            id: state.newAppleId,
            weight: action.payload,
            isEaten: false
        };
        state.apples.push(newApple);
        state.newAppleId++;
        state.isPicking = false;
        return fromJS(state).toJS();
    },
    FAIL_PICK_APPLE: (state: any, action: any) => ({...state, isPicking: false }),
    EAT_APPLE: (state: any, action: any) => {
        let eatItem = <Apple>state.apples.find((p: Apple) => p.id == action.payload);
        if (eatItem) eatItem.isEaten = true;
        return fromJS(state).toJS();
    },
}, defaultState);

// export default (state: AppleBasket = defaultState, action: { type: string, payload: any }) => {
//     if (!state) return;

//     switch (action.type) {
//         case 'BEGIN_PICK_APPLE':
//             state.isPicking = true;
//             break;
//         case 'DONE_PICK_APPLE':
//             let newApple = {
//                 id: state.newAppleId,
//                 weight: action.payload,
//                 isEaten: false
//             };
//             state.apples.push(newApple);
//             state.newAppleId++;
//             state.isPicking = false;
//             break;
//         case 'FAIL_PICK_APPLE':
//             state.isPicking = false;
//             break;

//         case 'EAT_APPLE':
//             let eatItem = <Apple>state.apples.find(p => p.id == action.payload);
//             if (eatItem) eatItem.isEaten = true;
//             break;

//         default:
//             return state;
//     }
//     return fromJS(state).toJS();
// };
