import React from 'react'
import {connect} from "react-redux"
import Loader from 'react-loader'

const Wrapper = (props) => {
    return (<Loader loaded={props.loaded}>{props.children}</Loader>);
};

const mapStateToProps = (state) => ({
    loaded: state.data.loaded && state.auth.loaded,
});

export default connect(mapStateToProps, null)(Wrapper);