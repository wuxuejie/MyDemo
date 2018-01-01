
export type ActionFunction0<R> = () => R;
export type ActionFunction1<T1, R> = (t1: T1) => R;
export type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R;
export type ActionFunction3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
export type ActionFunction4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
export type ActionFunctionAny<R> = (...args: {}[]) => R;

export interface BaseAction {
    type: string;
}

export interface Action<Payload> extends BaseAction {
    payload?: Payload;
    error?: boolean;
}


export type LessAction = ActionFunction0<Action<void>>;
export type AsynLessAction = ActionFunction0<(dispatch: {}, getState: {}) => void>;