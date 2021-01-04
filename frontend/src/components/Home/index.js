import "./index.css";
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux';
import {useEffect, useState} from "react"
import Star1 from "../../srcpublic/1-star-review.png"
import Star2 from "../../srcpublic/2-star-review.png"
import Star3 from "../../srcpublic/3-star-review.png"
import Star4 from "../../srcpublic/4-star-review.png"
import Star5 from "../../srcpublic/5-star-review.png"
import Star0 from "../../srcpublic/0-star-review.png"
import profile1 from "../../srcpublic/profile1.png"
import profile2 from "../../srcpublic/profile2.png"
import profile3 from "../../srcpublic/profile3.png"
import profile4 from "../../srcpublic/profile4.png"
import profile5 from "../../srcpublic/profile5.png"
import profile6 from "../../srcpublic/profile6.png"
import DeleteButton from "../DeleteButton"
import theLogo from "../../srcpublic/logoPicture.svg"



const Home = () => {
    const loggedInUser = useSelector(state => {
        return state.session.user;
    } )
// console.log(loggedInUser === undefined)
    const [posts, setPosts] = useState([])
    const [loggedin, setLoggedIn] = useState("false")
    const [postCounter, setPostCounter] = useState("")
    
    // console.log("This is the loggedin useeffect:   ",loggedin)
      useEffect(async () => {
          if(!loggedin)return
          if(loggedInUser != undefined)
          {setLoggedIn("true")
        const res = await fetch(`/api/speakeasy/${loggedInUser.id}`);
        const data = await res.json();
        const count = await fetch(`/api/speakeasy/${loggedInUser.id}/count`)
        const countjson = await count.json()
        setPostCounter(countjson)
        setPosts(data);}
      },[setLoggedIn, loggedInUser, loggedin]);
    

    return (
      <div className="outer-div-container">
      <div className="home-page-container">
        {loggedInUser && <h3>Recent activity for {loggedInUser.username}!</h3>}
        {loggedInUser &&
          posts.map((post) => {
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
 
      
let starRatingPhoto
if (userRating === 0 || userRating=== null ){starRatingPhoto = Star0}
if (userRating === 1){starRatingPhoto = Star1}
if (userRating === 2){starRatingPhoto = Star2}
if (userRating === 3){starRatingPhoto = Star3}
if (userRating === 4){starRatingPhoto = Star4}
if (userRating === 5){starRatingPhoto = Star5}
            return (
              <div className="flexbox-item" key={id}>
                <div className="div1">
                  <img className="myspace" src={profile4}></img>
                </div>
                <div className="div2">
                  <span>
                    <Link className="hyperlink-text-name" to={``}>
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
                  <h4>"{userReview}"</h4>
                  <h4>
                    <i class="fas fa-map-marker-alt" /> {location}
                  </h4>
                  <h6>{createdAt}</h6>

                  <img
                    className="user-images"
                    src={imageUrl ? imageUrl : ""}
                  ></img>
                    <DeleteButton post={post} />
                </div>
                <div className="div3">
                  <img className="scotch-image" src={Spirit.scotchUrl}></img>
                </div>
              </div>
            );
          })
        }
      </div>
     {loggedInUser &&  <div className="user-profile-info">
        <div><b> Posts </b> <div>
          {postCounter}</div></div>

      </div>
    }
    {!loggedInUser && <img src={theLogo} className="loggedoutpage"></img>}
      </div>
    );
}

export default Home