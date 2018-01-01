import { ActionFunction1, Action, AsynLessAction, LessAction } from './baseType';

export type DonePickApple= ActionFunction1<number, Action<void>>;
export type FailPickApple= ActionFunction1<string, Action<void>>;
export type EatApple= ActionFunction1<number, Action<void>>;

export interface IndexActions {
    pickApple: AsynLessAction;
    beginPickApple: LessAction;
    donePickApple: DonePickApple;
    failPickApple: FailPickApple;
    eatApple: EatApple;
}