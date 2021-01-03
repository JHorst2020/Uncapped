import "./Speakeasy.css";
import {Link} from "react-router-dom"
import {useState, useEffect} from "react";
import Star1 from "../../srcpublic/1-star-review.png";
import Star2 from "../../srcpublic/2-star-review.png";
import Star3 from "../../srcpublic/3-star-review.png";
import Star4 from "../../srcpublic/4-star-review.png";
import Star5 from "../../srcpublic/5-star-review.png";
import Star0 from "../../srcpublic/0-star-review.png";
import myspace from "../../srcpublic/coolguytom.png";

function Speakeasy() {
    const [posts, setPosts] = useState([]);
    
    useEffect(async() => {
        const res = await fetch('/api/speakeasy')
        const data = await res.json()
        setPosts(data)

    }, []);
 
return (
  <div className="outer-div-container">
    <div className="home-page-container">
      <h1>The Speakeasy</h1>
      {posts.map((post) => {
        const {
          User,
          Spirit,
          userRating,
          userReview,
          location,
          imageUrl,
          createdAt,
          id,
        } = post;
        let starRatingPhoto;
        if (userRating === 0 || userRating === null) {
          starRatingPhoto = Star0;
        }
        if (userRating === 1) {
          starRatingPhoto = Star1;
        }
        if (userRating === 2) {
          starRatingPhoto = Star2;
        }
        if (userRating === 3) {
          starRatingPhoto = Star3;
        }
        if (userRating === 4) {
          starRatingPhoto = Star4;
        }
        if (userRating === 5) {
          starRatingPhoto = Star5;
        }
        return (
          <div className="flexbox-item" key={id}>
            <div className="div1">
              <img className="myspace" src={myspace}></img>
            </div>
            <div className="div2">
              <span>
                <Link className="hyperlink-text-name" to={`/${User.id}`}>
                  {User.firstName ? User.firstName : User.username}
                </Link>
                <span> is drinking a </span>
                <Link
                  className="hyperlink-text-name"
                  to={`scotch/${Spirit.id}`}
                >
                  {Spirit.scotchName}
                </Link>
              </span>
              <div>
                <img className="stars" src={starRatingPhoto}></img>
              </div>
              <p>{userReview}</p>
              <h4>{location}</h4>
              <h6>{createdAt}</h6>

              <img className="user-images" src={imageUrl ? imageUrl : ""}></img>
            </div>
            <div className="div3">
              <img className="scotch-image" src={Spirit.scotchUrl}></img>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

}

export default Speakeasy


    
