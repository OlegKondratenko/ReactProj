import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { LogInThunk } from '../../redux/authReducer';
import { maxlength10, required } from '../../utils/validators/formValidators';
import { Input } from '../common/Preloader/formsControlls/FormsControlls';

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" component={Input} validate={[required, maxlength10]} type="text" name="email"></Field>
            </div>
            <div>
                <Field type="password" validate={[required, maxlength10]} name="password" component={Input}></Field>
            </div>
            <div>
                <label htmlFor="save">Remember me</label>
                <Field component="input" type="checkbox" name="rememberMe"></Field>


            </div>
            {props.error ? <div>{props.error}</div> : null}
            <button type="submit">Submit</button>
        </form>)
}

let ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

let Login = (props) => {

    if (props.isAuth) {
        return (<Redirect to='/profile' />)
    }
    return (
        <div>
            <h1>Login Heading</h1>
            <ReduxLoginForm onSubmit={props.LogInThunk} />

        </div>
    )
}
let setState = (state) => {
    return {
        isAuth: state.authentication.isAuth
    }
}
let LoginWrapper = connect(setState, { LogInThunk })(Login)

export default LoginWrapper;