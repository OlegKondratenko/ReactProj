import { stopSubmit } from "redux-form";
import { AuthAPI } from "../Api/Api";
const LOG_IN = "LOG-IN"
const SET_USER_DATA = 'SET-USER-DATA';
const LOG_OUT = "LOG-OUT";

let initState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

let authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...action.data,
                isAuth: action.data.isAuth,
                id: action.data.id,
                login: action.data.login,
                email: action.data.email
            }
        case LOG_IN:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
}




export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })
export const loggedIn = () => ({ type: LOG_IN, isAuth: true })


export const LogInThunk = (loginFormData) => {
    return async (dispatch) => {
        let response = await AuthAPI.loggingIn(loginFormData)

        if (response.resultCode === 0) {
            dispatch(setAuthDataThunk())
        } else {
            let formAction = stopSubmit('login', { _error: response.messages[0] || "Wrong Email or Pass" });
            dispatch(formAction);
        }


    }
}
export const logOutThunk = () => {
    return async (dispatch) => {
        let response = await AuthAPI.logout();
        if (response.resultCode === 0) { return dispatch(setAuthUserData(null, null, null, false)) }
    }
}
export const setAuthDataThunk = () => {
    return (dispatch) => {
        return AuthAPI.getAuthInfo()
            .then(data => { if (data) { let { id, login, email } = data; dispatch(setAuthUserData(id, login, email, true)) } })

    }
}


export default authReducer;
