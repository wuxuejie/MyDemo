import { IndexActions } from './actionType/registerType';

export interface FormData {
    name: string;
    age: number;
}
export interface IndexProps {
    actions: IndexActions;
}