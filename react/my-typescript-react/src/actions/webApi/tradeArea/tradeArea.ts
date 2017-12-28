import post from '../ajax'
import { areaListRsp } from './contract';

const areaList: string = '/tradeArea/tradeArea/areaList'

export default {
    areaList(): Promise<areaListRsp> {
        return post(areaList, {});
    }
}