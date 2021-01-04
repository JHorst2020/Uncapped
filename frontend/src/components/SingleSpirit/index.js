import React, { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"
import AddReview from "../AddReview"
import scotchImage from "./../Spirits/Cocktail-14-512.jpg"
import EditSingleSpirit from "./../EditSingleSpirit"
import SingleSpiritPost from "./SingleSpiritPosts"
import "./SingleSpirit.css"

function SingleSpirit() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let {id} = useParams()
    const [spirit, setSpirit] = useState([])
    // console.log("this is :   ", id)
    useEffect(async()=>{
        const res = await fetch(`/api/scotch/${id}`)
        const data = await res.json()
        console.log(data)
        setSpirit(data)
    },[])

    return (
        <div className="single-spirit-container">
            {spirit.map((drink)=> {
                const {id, scotchName, country, region, spiritStyle, scotchUrl} = drink;
                return (
                  <div className="spirit-info-container container-for-scotch" key={id}>
                    <h4 className="spirit-scotchName">{scotchName}</h4>
                    <div className="spirit-country">Country: {country}</div>
                    <div className="spirit-state">Region: {region}</div>
                    <div className="spirit-style">Style: {spiritStyle}</div>
                    <a className="spirit-scotchUrl" href={scotchUrl}>
                      <img
                        className="scotch-photo"
                        src={scotchUrl ? scotchUrl : scotchImage}
                        alt={`"${scotchName}"`}
                      ></img>
                    </a>
                    <div className="add-review-button">
                    <AddReview scotch={drink}/>
                    <div className="buffer"> </div>
                    <EditSingleSpirit scotch={drink}/>
                    </div>
                  </div>
                );
            })}
            <SingleSpiritPost scotchId={id} />
        </div>
    )

}

export default SingleSpirit