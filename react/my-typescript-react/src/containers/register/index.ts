
import { connect, Dispatch } from 'react-redux';
import Register from './App';
import { onSubmit } from '../../actions/appActions/register';
import { StoreState } from '../../types';

const mapStateToProps = (state: StoreState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    onSubmit: onSubmit
});

export default connect<{}, {}>(mapStateToProps, mapDispatchToProps)(Register);
