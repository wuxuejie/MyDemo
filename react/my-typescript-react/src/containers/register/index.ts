
import { connect, Dispatch } from 'react-redux';
import Register from './ReactReduxForm';
import { StoreState } from '../../types';
// import { FormData } from '../../types/register';
import { bindActionCreators } from 'redux';
import actions from '../../actions/appActions/register';

const mapStateToProps = (state: StoreState) => {
    return state;
};

const mapDispatchToProps = (dispatch: Dispatch<string>) => ({
    // actions: {
    //     HandleSubmit: (values: FormData) => {
    //         console.log(values.name);
    //         //==dispatch()
    //     }
    // }
    actions: bindActionCreators(actions, dispatch)
});

export default connect<{}>(mapStateToProps, mapDispatchToProps)(Register);
