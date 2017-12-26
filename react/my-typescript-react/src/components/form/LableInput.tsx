

import * as React from 'react';
import { Field } from 'redux-form';

interface Props {
  maxLength?: number
  valueType?: string
}

const renderField = (props: Props | any) => {
  const normalize = (value: string, previousValue: string, allValues: any, previousAllValues: any) => {
    return value && value.toUpperCase()
  }
  return (
    <dl>
      <dt><label htmlFor={props.name}>{props.placeholder}</label></dt>
      <dd>
        <Field id={props.name} {...props} component='input' normalize={props.normalize || normalize} />
        {props.touched && props.error && <span>{props.error}</span>}
      </dd>
    </dl>);
}

export default renderField