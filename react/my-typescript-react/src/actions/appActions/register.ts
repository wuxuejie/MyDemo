import { FormData } from '../../types/register';
import { HandleSubmit } from '../../types/actionType/registerType';
// import { AsynLessAction } from '../../types/actionType/baseType';

export const onSubmit: HandleSubmit = (values: FormData) => {
    // tslint:disable-next-line:no-console
    console.log(values.name);
};
export default {
    HandleSubmit: (values: FormData) => {
        // tslint:disable-next-line:no-console
        console.log(values.name);
    }
};