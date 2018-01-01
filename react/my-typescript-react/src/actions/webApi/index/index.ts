import { postJson } from '../../core/ajax';
import { BannerListRsp } from './contract';

const bannerListUrl: string = '/index/index/bannerList';

export default {
    bannerList(): Promise<BannerListRsp> {
        return postJson<BannerListRsp>(bannerListUrl, {'limit': 10, 'offset': 0});
    }
};