import { setTimeout } from "timers";
import { FormData } from "../../types/register";

export interface HandleSubmit { (values: FormData): any; }
export const onSubmit: HandleSubmit = (values: FormData) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            values.firstName = 'hello '+values.firstName
            resolve(values);
        }, 2000);
    });
}