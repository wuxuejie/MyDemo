
import { AppleBasket } from '../components/appleBasket/type';

export interface StoreState {
    appleBasket: AppleBasket;
}
export interface ActionType {
    type: string,
    payload: any,
    error: boolean,
    (): any
}