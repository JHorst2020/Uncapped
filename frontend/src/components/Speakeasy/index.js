import "./Speakeasy.css";

import {useState, useEffect} from "react";

function Speakeasy() {
    const [posts, setPosts] =useState([]);
    
    useEffect(async() => {
        const res = await fetch('/api/speakeasy')
        const data = await res.json()
        console.log(data);
        setPosts(data)
    }, []);
    
return (
    <>
    <h1>The Speakeasy</h1>
    {posts.map((post)=>{
        const {User, Spirit, userRating, userReview, location, imageUrl, createdAt, id } = post;
        return (
          <div key={id}>
            <h3>Alcoholic: {User.firstName}</h3>
            <h3>
              Scotch:{" "}
              <span>
                {Spirit.scotchName}
              </span>
            </h3>
            <h3>{userRating} Stars</h3>
            <h3>{userReview}</h3>
            <h3>{location}</h3>
            <h4>{createdAt}</h4>
            <img src={imageUrl ? imageUrl : ""}></img>
          </div>
        );
    })}
    </>
)

}

export default Speakeasy


    
