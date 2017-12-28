import { InjectedFormProps } from 'redux-form';
import { AppleBasket, SampleFormData } from './appleBasket';
import { BannerList } from './home';
import { Reducer } from 'redux';
import { RouterState } from 'react-router-redux'

export interface StoreState {
    appleBasket: AppleBasket
    banners: BannerList
    form: InjectedFormProps<SampleFormData>
    routing: Reducer<RouterState>
}