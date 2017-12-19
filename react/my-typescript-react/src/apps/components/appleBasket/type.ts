
import { Actions } from './actions';

export interface Apple{
    id: number,
    weight: number,
    isEaten: boolean
}

export interface AppleBasket {
    isPicking: boolean,
    newAppleId: number,
    apples: Apple[]
};

export interface IndexProps{
    appleBasket:AppleBasket,
    actions:Actions
}
export interface AppleItemProps{
    eatApple:Actions["eatApple"],
    apple:Apple
}