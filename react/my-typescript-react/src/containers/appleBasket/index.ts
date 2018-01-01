
import { connect, Dispatch } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import AppleBasket from './App';
import actions from '../../actions/appActions/appleBasket';
import { StoreState } from '../../types/index';

const mapStateToProps = (state: StoreState) => {
    var selector = formValueSelector('simple');
    state.appleBasket.pickingNumber = selector(state,'pickingNumber');
    return ({
        ...state.appleBasket,
        initialValues:state.appleBasket
    })
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect<{}, {}>(mapStateToProps, mapDispatchToProps)(AppleBasket);


