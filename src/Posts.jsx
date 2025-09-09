import React, { useEffect, useState } from 'react'

function Posts() {

   const [posts, setPosts] = useState([]);

   useEffect(()=>{

    fetch("http://localhost:3000/posts").
    then((data)=> data.json()).
    then((data=>setPosts(data))).
    catch(err=>console.log(err))

   },[]);




  return (
    <div className="d-flex justify-content-center mt-5">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className="my-3" key={post.id}>
              <div className="d-flex">
                <img
                  className="dp rounded-circle"
                  src={post.user.profile_pic}
                  alt="Profile pic"
                />
                <h5 className="mt-2">{post.user.username}</h5>
              </div>
              <img className="image" src={post.post_image} alt="" />
              <div className="mt-2">
                <i className="bi bi-heart me-3"></i>
                <i className="bi bi-chat me-3"></i>
                <i className="bi bi-send me-3"></i>
                <i className="bi bi-bookmark"></i>
              </div>
              <div>
                <b>{post.likes} Likes</b>
              </div>
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts</div>
      )}
    </div>
  );
}

export default Posts