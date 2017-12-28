export interface BannerModel {
    id: number,
    title: string,
    image_url: string,
    show_area: number,
    show_type: number,
    link_url: string,
    sort: number
}
export interface BannerListRsp {
    banners: BannerModel[]
}