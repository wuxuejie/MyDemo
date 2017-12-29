

import { InjectedFormProps } from 'redux-form'
import { IndexActions, EatApple } from './actionType/appleBasketType';

export interface Apple {
    id: number,
    weight: number,
    isEaten: boolean
}


export interface FormData {
    name: string;
    age: number;
}
export interface SampleFormData {
    pickingNumber: string
}
export interface AppleBasketProps {
    isPicking: boolean,
    newAppleId: number,
    notEatenQuantity: number,
    notEatenWeight: number,
    EatenQuantity: number,
    EatenWeight: number,
    apples: Apple[],
    pickingNumber: string
};

export interface IndexProps extends InjectedFormProps<SampleFormData>, AppleBasketProps {
    actions: IndexActions
}
export interface AppleItemProps {
    eatApple: EatApple,
    apple: Apple
}