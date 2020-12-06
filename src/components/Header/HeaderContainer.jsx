import React from 'react';
import { setAuthDataThunk, logOutThunk } from '../../redux/authReducer';
const { connect } = require("react-redux");
const { default: Header } = require("./Header");

class HeaderAjaxApi extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Header {...this.props} />)
    }
}

let setState = (state) => {
    return {
        isAuth: state.authentication.isAuth,
        login: state.authentication.login,
        id: state.authentication.id,
        email: state.authentication.email,
    }
}
let HeaderContainer = connect(setState, { logOutThunk })(HeaderAjaxApi)

export default HeaderContainer;