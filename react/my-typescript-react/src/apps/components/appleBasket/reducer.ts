import { fromJS } from 'immutable';  // 为什么immutable 没写入package.json 好奇怪
import { ActionType } from '../../types/index';
import { AppleBasket, Apple } from './type';

export default (state: AppleBasket, action: ActionType) => {
    if (state === undefined) {
        state = {
            isPicking: false,
            newAppleId: 0,
            apples: []
        };
    }

    switch (action.type) {

        case 'apple/BEGIN_PICK_APPLE':
            return fromJS(state).set('isPicking', true).toJS();

        case 'apple/DONE_PICK_APPLE':
            let newApple = {
                id: state.newAppleId,
                weight: action.payload,
                isEaten: false
            };
            
            return fromJS(state).update('apples', (list: Array<Apple>) => list.push(newApple))
                .set('newAppleId', state.newAppleId + 1)
                .set('isPicking', false)
                .toJS();

        case 'apple/FAIL_PICK_APPLE':
            return fromJS(state).set('isPicking', false).toJS();

        case 'apple/EAT_APPLE':
            let s = fromJS(state).setIn(['apples', action.payload, 'isEaten'], true).toJS();
            return s;

        default:
            return state;
    }

};
