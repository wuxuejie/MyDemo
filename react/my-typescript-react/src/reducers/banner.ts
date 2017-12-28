import { fromJS } from 'immutable';
import { BannerList } from '../types/home';

export default (state: BannerList = [], action: { type: string, payload: BannerList }) => {
    switch (action.type) {
        case "LOAD_BANNERS":
            state = action.payload;
            break;
        default:
            return state;
    }
    return fromJS(state).toJS();
};