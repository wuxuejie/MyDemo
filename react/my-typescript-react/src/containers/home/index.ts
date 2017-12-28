
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './App';
import { StoreState } from '../../types/index';
import { loadBanners } from '../../actions/appActions/pageContent';


const mapStateToProps = (state: StoreState) => {
    return ({
        banners: state.banners
    })
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    loadBanners: bindActionCreators(loadBanners, dispatch)
});

export default connect<{}, {}>(mapStateToProps, mapDispatchToProps)(Home);


