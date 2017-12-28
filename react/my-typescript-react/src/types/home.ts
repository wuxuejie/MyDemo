import { BannerModel } from "../actions/webApi/index/contract";


export interface BannerList extends Array<BannerModel> {}

export interface homeProps {
    banners:BannerList,
    loadBanners:{ (): any; }
}