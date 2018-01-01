// tslint:disable-next-line:class-name
export interface areaListRsp {
    areaList: Array<{
        id: number
        name: string
        currency_id: number
        sort: number
        state: number
        last_price: number
        deal_num: number
    }>;
}