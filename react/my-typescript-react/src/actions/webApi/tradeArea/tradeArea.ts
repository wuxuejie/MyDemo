import { postJson } from '../../core/ajax';
import { areaListRsp } from './contract';

const areaList: string = '/tradeArea/tradeArea/areaList';

export default {
    areaList(): Promise<areaListRsp> {
        return postJson<areaListRsp>(areaList, {});
    }
};