import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom'


function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <header className="header"><Header /></header>
        <div className="sidebar"><Sidebar state={props.state.sidebar} /> </div>
        <div className="content">
          <Route path="/profile" render={() => <Profile state={props.state.profile} />} />
          <Route path="/dialogs" component={() => <Dialogs state={props.state.dialogs} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;