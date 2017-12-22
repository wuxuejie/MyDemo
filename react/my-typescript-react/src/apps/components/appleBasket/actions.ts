
export enum ActionEnum {
    BEGIN_PICK_APPLE = 1,
    DONE_PICK_APPLE,
    FAIL_PICK_APPLE,
    EAT_APPLE
}

export interface IndexActions {
    pickApple: PickApple;
    beginPickApple: BeginPickApple;
    donePickApple: DonePickApple;
    failPickApple: FailPickApple;
    eatApple: EatApple;
    eatApple2: EatApple;
}

interface PickApple { (): any; }
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
const beginPickApple: BeginPickApple = () => ({
    type: ActionEnum.BEGIN_PICK_APPLE
});

interface DonePickApple { (appleWeight: number): any; }
const donePickApple: DonePickApple = (appleWeight: number) => ({
    type: ActionEnum.DONE_PICK_APPLE,
    payload: appleWeight
})

interface FailPickApple { (errMsg: string): any; }
const failPickApple: FailPickApple = (errMsg: string) => ({
    type: ActionEnum.FAIL_PICK_APPLE,
    payload: new Error(errMsg),
    error: true
})

export interface EatApple { (appleId: number): any; }
const eatApple: EatApple = (appleId: number) => ({
    type: ActionEnum.EAT_APPLE,
    payload: appleId
})

export default {
    pickApple: pickApple,
    beginPickApple: beginPickApple,
    donePickApple: donePickApple,
    failPickApple: failPickApple,
    eatApple: eatApple
};