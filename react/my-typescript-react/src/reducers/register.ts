// import { fromJS } from 'immutable';  // 为什么immutable 没写入package.json 好奇怪
// import { IndexProps,ActionEnum } from './type';

const initState = {
    name: 'wxj'
};

export default (state = initState, action: { type: string, payload: {} }) => {
    return state;
};
