import { InjectedFormProps } from 'redux-form';
import { AppleBasketProps, SampleFormData } from './appleBasket';
import { BannerList } from './home';
import { Reducer } from 'redux';
import { RouterState } from 'react-router-redux';

export interface StoreState {
    appleBasket: AppleBasketProps;
    banners: BannerList;
    form: InjectedFormProps<SampleFormData>;
    routing: Reducer<RouterState>;
    user: {name: string};
}