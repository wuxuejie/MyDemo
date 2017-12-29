import { fromJS } from 'immutable';
import { AppleBasketProps, Apple } from '../types/appleBasket';
const initialState: AppleBasketProps = {
    pickingNumber: '初始化',
    isPicking: false,
    newAppleId: 0,
    notEatenQuantity: 0,
    notEatenWeight: 0,
    EatenQuantity: 0,
    EatenWeight: 0,
    apples: []
};

export default (state: any = initialState, action: { type: string, payload: any }) => {
  
    switch (action.type) {
        case 'apple/BEGIN_PICK_APPLE':
            state.isPicking = true;
            break;

        case 'apple/DONE_PICK_APPLE':
            let newApple = {
                id: state.newAppleId,
                weight: action.payload,
                isEaten: false
            };
            state.apples.push(newApple);
            state.newAppleId++;
            state.notEatenQuantity++;
            state.notEatenWeight += action.payload;
            state.isPicking = false;
            state.pickingNumber = '摘了：' + state.pickingNumber
            break;

        case 'apple/FAIL_PICK_APPLE':
            state.isPicking = false;
            break;

        case 'apple/EAT_APPLE':
            let eatItem = <Apple>state.apples.find((p: Apple) => p.id == action.payload);
            state.notEatenQuantity--;
            state.notEatenWeight -= eatItem.weight;
            state.EatenQuantity++;
            state.EatenWeight += eatItem.weight;
            if (eatItem) eatItem.isEaten = true;
            break;

        default:
            return state;
    }
    return fromJS(state).toJS();
};
