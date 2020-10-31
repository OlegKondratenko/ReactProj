import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="app-wrapper">
         <header className="header"><Header /></header>
         <div className="sidebar"><Sidebar /> </div>
         <div className="content"><Profile /></div>       
    </div>
  );
}

export default App;