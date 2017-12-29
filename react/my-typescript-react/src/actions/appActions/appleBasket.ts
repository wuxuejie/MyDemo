import { createAction } from 'redux-actions';
import { DonePickApple, FailPickApple, IndexActions } from '../../types/actionType/appleBasketType';
import { EatApple } from '../../apps/components/appleBasket/actions';
import { LessAction, AsynLessAction } from '../../types/actionType/baseType';

const pickApple: AsynLessAction = () => {
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

const beginPickApple: LessAction = createAction('apple/BEGIN_PICK_APPLE');

const donePickApple: DonePickApple = createAction('apple/DONE_PICK_APPLE');

const failPickApple: FailPickApple = createAction('apple/FAIL_PICK_APPLE');

const eatApple: EatApple = createAction('apple/EAT_APPLE');

let indexActions: IndexActions;
export default indexActions = {
    pickApple: pickApple,
    beginPickApple: beginPickApple,
    donePickApple: donePickApple,
    failPickApple: failPickApple,
    eatApple: eatApple
};