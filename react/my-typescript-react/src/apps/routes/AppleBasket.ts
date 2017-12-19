
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppleBasket from '../components/appleBasket/Index';
import actions, { Actions } from '../components/appleBasket/actions';
import { StoreState } from '../types/index';

const mapStateToProps = (state: StoreState) => ({
    appleBasket: state.appleBasket
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppleBasket);
