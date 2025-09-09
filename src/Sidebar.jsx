import React from 'react'
import { useNavigate } from 'react-router-dom';

function sideBar() {
   
  const navigate = useNavigate(); 

  return (
    <div className="m-3 position-fixed">
      <div className="side-text d-flex flex-column fs-5 mt-4 ms-2">
        <img
          className="logo-text"
          src=".\src\assets\Instagram_text.svg.png"
          alt=""
        />
        <div>
          <i className="bi bi-house-door"></i>Home
        </div>
        <div>
          <i className="bi bi-search"></i>Search
        </div>
        <div>
          <i className="bi bi-compass"></i>Explore
        </div>
        <div>
          <i className="bi bi-collection-play"></i>Reels
        </div>
        <div>
          <i className="bi bi-send"></i>Messages
        </div>
        <div>
          <i className="bi bi-heart"></i>Notifications
        </div>
        <div>
          <i className="bi bi-plus-square"></i>Create
        </div>
        <div onClick={()=>{navigate('/profile')}}>
          <i className="bi bi-person-circle"></i>Profile
        </div>
      </div>
      <div className="position-fixed bottom-0 d-flex flex-column gap-4 fs-5 mb-3 ms-2">
        <div>
          <i className="bi bi-threads"></i>Threads
        </div>
        <div>
          <i className="bi bi-list"></i>More
        </div>
      </div>
    </div>
  );
}

export default sideBar