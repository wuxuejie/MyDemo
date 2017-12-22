
import { HandleSubmit } from './actions';
import { InjectedFormProps } from 'redux-form'


export enum ActionEnum {
    BeginSubmit = 1,
    FailSubmit,
    SuccessSubmit,
    Reset
}

export interface FormData {
    firstName: string
}

export interface IndexProps extends InjectedFormProps<{}> {
    firstName: string
}

export interface FormProps {
    onSubmit: HandleSubmit
}