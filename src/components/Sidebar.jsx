import React from 'react';

function Sidebar(){
    return (
      <div>
        <nav>
          <div className="nav-item">Profile</div>
          <div className="nav-item">Messages</div>
          <div className="nav-item">News</div>
          <div className="nav-item">Music</div>
          <div className="nav-item">Settings</div>
        </nav>
      </div>
    );
  }

export default Sidebar;