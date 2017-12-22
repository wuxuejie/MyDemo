

import { connect } from 'react-redux';
import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
// import { StoreState } from '../AppStore';


export interface SampleFormData {
  username: string;
}

 interface SampleFormProps {
  saveData: (data: SampleFormData) => void;
}

type AllSampleFormProps = SampleFormProps & InjectedFormProps<SampleFormData>;

// const mapStateToProps = (state: StoreState) => ({
//   demo: state.demo
// });

const SampleForm: React.SFC<AllSampleFormProps> = (props) => (
  <form onSubmit={props.handleSubmit(props.saveData)}>
    <Field name="username" component="input" />
  </form>
);

const DecoratedSampleForm = reduxForm<SampleFormData>({ form: "sampleForm" })(SampleForm);

export default connect<{}, {}>(
  () => ({}),
  (dispatch) => ({
    saveData: (data: SampleFormData) => dispatch({ type: "SAVE_DATA", data })
  })
)(DecoratedSampleForm);