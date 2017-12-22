import { createAction } from 'redux-actions';

export interface IndexActions {
    pickApple: PickApple;
    beginPickApple: BeginPickApple;
    donePickApple: DonePickApple;
    failPickApple: FailPickApple;
    eatApple: EatApple;
    eatApple2: EatApple;
}

interface PickApple { (): any; }
// const pickApple: PickApple = handleAction('BEGIN_PICK_APPLE',(state, action)=>{
//     return fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
//     .then(res => {
//         if (res.status !== 200)
//             dispatch(failPickApple(res.statusText));

//         let weight = Math.floor(200 + Math.random() * 50);
//         dispatch(donePickApple(weight));

//     }).catch(e => {
//         dispatch(failPickApple(e.statusText));
//     });
// },'');
const pickApple: PickApple = () => {
    return function (dispatch: any, getState: any) {
        if (getState().appleBasket.isPicking) {
            return;
        }

        dispatch(beginPickApple());

        fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            .then(res => {
                if (res.status !== 200)
                    dispatch(failPickApple(res.statusText));

                let weight = Math.floor(200 + Math.random() * 50);
                dispatch(donePickApple(weight));

            }).catch(e => {
                dispatch(failPickApple(e.statusText));
            });
    }
}

interface BeginPickApple { (): any; }
const beginPickApple: BeginPickApple = createAction('BEGIN_PICK_APPLE');

interface DonePickApple { (appleWeight: number): any; }
const donePickApple: DonePickApple =createAction('DONE_PICK_APPLE');

interface FailPickApple { (errMsg: string): any; }
const failPickApple: FailPickApple = createAction('FAIL_PICK_APPLE');

export interface EatApple { (appleId: number): any; }
const eatApple: EatApple = createAction('EAT_APPLE');

export default {
    pickApple: pickApple,
    beginPickApple: beginPickApple,
    donePickApple: donePickApple,
    failPickApple: failPickApple,
    eatApple: eatApple
};