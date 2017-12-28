import post from '../ajax'
import { BannerListRsp } from './contract';

const bannerListUrl: string = '/index/index/bannerList'

export default {
    bannerList(): Promise<BannerListRsp> {
        return post(bannerListUrl, {"limit":10,"offset":0});
    }
}