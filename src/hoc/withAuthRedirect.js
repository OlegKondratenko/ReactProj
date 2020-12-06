import { Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

let authProps = (state) => {
    return {
        isAuth: state.authentication.isAuth
    }
}

let withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return (<Component {...this.props} />)
        }
    }
    let withAuthContainer = connect(authProps, {})(RedirectComponent)
    return withAuthContainer;
}



export default withAuthRedirect;