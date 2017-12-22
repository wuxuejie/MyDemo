
import { IndexActions, EatApple } from './actions';

export interface Apple {
    id: number,
    weight: number,
    isEaten: boolean
}


export interface FormData {
    name: string;
    age: number;
}

export interface AppleBasket {
    isPicking: boolean,
    newAppleId: number,
    apples: Apple[]
};

export interface IndexProps {
    appleBasket: AppleBasket,
    actions: IndexActions
}
export interface AppleItemProps {
    eatApple: EatApple,
    apple: Apple
}