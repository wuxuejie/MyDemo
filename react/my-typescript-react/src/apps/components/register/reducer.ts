// import { fromJS } from 'immutable';  // 为什么immutable 没写入package.json 好奇怪
// import { IndexProps,ActionEnum } from './type';


// export default (state: IndexProps, action: { type: ActionEnum, payload: any }) => {
//     switch (action.type) {
//         case ActionEnum.BeginSubmit:
//             state.submitting = true;
//             break;
//         case ActionEnum.FailSubmit:
//             state.submitting = false;
//             break;
//         case ActionEnum.SuccessSubmit:
//             console.log('成功');
//             break;
//         case ActionEnum.Reset:
//             console.log('成功');
//             break;
//         default:
//             return <IndexProps>{firstName:'wxj'};
//     }
//     return fromJS(state).toJS();
// };
