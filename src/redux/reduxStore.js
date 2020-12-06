import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import profileReducer from './profileReducer';
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    authentication: authReducer,
    initApp: appReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)))

window.__store__ = store;
export default store;

