import { ActionFunction1 } from './baseType';
import { FormData } from '../register';


export type HandleSubmit= ActionFunction1<FormData, void>;

export interface IndexActions {
    HandleSubmit: HandleSubmit;
}