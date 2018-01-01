// ./components/my-form-component.js'
import * as React from 'react';
import { Control, Form } from 'react-redux-form';
import { IndexProps } from '../../types/register';

class MyForm extends React.Component<IndexProps> {
  render() {
    const { HandleSubmit } = this.props.actions;
    return (
      <Form model="user" onSubmit={(val) => HandleSubmit(val)}>
        <label>Your name?</label>
        <Control.text model=".name" />
        <button>Submit!</button>
      </Form>
    );
  }
}
export default MyForm;