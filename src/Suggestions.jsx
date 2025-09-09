import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {

 const [profile , setProfile] = useState(null);
 const [Suggestions, setSuggestions] = useState([]);
 

 useEffect(()=>{

          fetch("http://localhost:3000/profile")
          .then(data => data.json())
          .then(data => setProfile(data))
          .catch(err => console.log(err));

          fetch("http://localhost:3000/suggistions")
            .then(data => data.json())
            .then(data => setSuggestions(data))
            .catch(err => console.log(err));
   
 },[]);


 const HandleFollow = async (id, username) =>{
     axios.post("http://localhost:3000/followers",{"id": id, "username" : username})
     .then(alert("followed"))
     .catch(err => console.log(err))
 }


  return (
    <div>
      <div className="suggestions w-75 m-4">
        {profile ? (
          <div className="d-flex">
            <img
              className="dp rounded-circle"
              src={profile.profile_pic}
              alt="Profile pic"
            />
            <h5 className='mt-2'>{profile.username}</h5>
            <small className="ms-auto mt-2 text-primary">Switch</small>
          </div>
        ) : (
          <p>Loading</p>
        )}

        <div className="d-flex mt-3">
          <p>Suggested for you</p>
          <b className="ms-auto">See All</b>
        </div>

        {Suggestions.length > 0 ? (
          <div>
            {Suggestions.map((suggestion) => (
              <div key={suggestion.id}>
                <div className="d-flex mt-3">
                  <img
                    className="dp rounded-circle"
                    src={suggestion.profile_pic}
                    alt="Profile pic"
                  />
                  <h5 className='mt-2'>{suggestion.username}</h5>
                  <a onClick={()=>{HandleFollow(suggestion.id,suggestion.username)}} className='text-primary ms-auto'>Follow</a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default Suggestions;