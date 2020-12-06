import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

import Login from './components/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/reduxStore';

import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import TestPage from './components/TestPage/TestPage';
import withSuspense from './hoc/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));



class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInit) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <header className="header"><HeaderContainer /></header>
        <div className="sidebar"><SidebarContainer /> </div>
        <div className="content">

          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/testPage" render={() => <TestPage />} />
        </div>
      </div>

    )
  }
}
let mapStateToProps = (state) => {
  return {
    isInit: state.initApp.initialized
  }
}

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

let MainApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>)
}


export default MainApp;