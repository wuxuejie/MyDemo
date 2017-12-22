
import { connect, Dispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Register from '../components/register/Index';
import {onSubmit} from '../components/register/actions';
import { StoreState } from '../AppStore';

// const mapStateToProps = (state: StoreState) => ({
// });

const mapStateToProps = (state: StoreState) => ({
    appleBasket: state.appleBasket
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    onSubmit: onSubmit
});

export default connect<{},{}>(mapStateToProps, mapDispatchToProps)(Register);
