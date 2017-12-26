import { AppleBasket, SampleFormData } from './appleBasket';
import { InjectedFormProps } from 'redux-form';
export interface StoreState {
    appleBasket: AppleBasket,
    form: InjectedFormProps<SampleFormData>
}