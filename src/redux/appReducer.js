import { setAuthDataThunk } from "./authReducer"

const SET_INIT = 'SET-INIT'
let initState = {
    initialized: false
}

let appReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                initialized: action.isInit

            }
        default:
            return state
    }
}

export const initApp = () => ({ type: SET_INIT, isInit: true })

export const initializeApp = () => {
    return (dispatch) => {
        let promises = [dispatch(setAuthDataThunk()),
            //else init async requests
        ]
        Promise.all(promises).then(dispatch(initApp()))

    }
}

export default appReducer;