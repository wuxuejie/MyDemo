import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppleBasket from '../components/appleBasket/Index'
import actions from '../components/appleBasket/actions';

const mapStateToProps = state => ({
    appleBasket: state.appleBasket
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppleBasket);
