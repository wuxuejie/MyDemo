import index from "../webApi/index/index";
import { createAction } from "redux-actions";



// export interface LoadBanners { (): any; }
export const loadBanners: { (): any; } = () => {
    return function (dispatch: any, getState: any) {
        index.bannerList().then(rst => {
            const donePickApple: any = createAction('LOAD_BANNERS');
            dispatch(donePickApple(rst.banners));
        });
    }
}