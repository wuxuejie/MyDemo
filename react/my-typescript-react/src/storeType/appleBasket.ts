
import { IndexActions, EatApple } from '../actions/appActions/appleBasket';
import { InjectedFormProps } from 'redux-form'

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
export interface AppleBasket {
    isPicking: boolean,
    newAppleId: number,
    notEatenQuantity: number,
    notEatenWeight: number,
    EatenQuantity: number,
    EatenWeight: number,
    apples: Apple[],
    pickingNumber: string
};

export interface IndexProps extends InjectedFormProps<SampleFormData>, AppleBasket {
    actions: IndexActions
}
export interface AppleItemProps {
    eatApple: EatApple,
    apple: Apple
}