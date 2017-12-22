
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppleBasket from '../components/appleBasket/Index';
import actions from '../components/appleBasket/actions';
import { StoreState } from '../AppStore';

const mapStateToProps = (state: StoreState) => ({ appleBasket: state.appleBasket });

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect<{}, {}>(mapStateToProps, mapDispatchToProps)(AppleBasket);
