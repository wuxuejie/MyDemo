import { ActionType } from '../../types/index';

export interface Actions {
    pickApple: PickApple;
    beginPickApple: BeginPickApple;
    donePickApple: DonePickApple;
    failPickApple: FailPickApple;
    eatApple: EatApple;
}
interface PickApple { (): ActionType; }
interface BeginPickApple { (): ActionType; }
interface DonePickApple { (appleWeight: number): ActionType; }
interface FailPickApple { (errMsg: string): ActionType; }
interface EatApple { (appleId: number): ActionType; }

let actions = {

    pickApple: function () {
        return function (dispatch: any, getState: any) {
            if (getState().appleBasket.isPicking) {
                return;
            }

            dispatch(actions.beginPickApple());

            fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
                .then(res => {
                    if (res.status !== 200)
                        dispatch(actions.failPickApple(res.statusText));

                    let weight = Math.floor(200 + Math.random() * 50);
                    dispatch(actions.donePickApple(weight));

                }).catch(e => {
                    dispatch(actions.failPickApple(e.statusText));
                });
        }
    },

    beginPickApple: () => ({
        type: 'apple/BEGIN_PICK_APPLE'
    }),

    donePickApple: (appleWeight: number) => ({
        type: 'apple/DONE_PICK_APPLE',
        payload: appleWeight
    }),

    failPickApple: (errMsg: string) => ({
        type: 'apple/FAIL_PICK_APPLE',
        payload: new Error(errMsg),
        error: true
    }),

    eatApple: (appleId: number) => ({
        type: 'apple/EAT_APPLE',
        payload: appleId
    })

};

export default actions;