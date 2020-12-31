import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

import scotchImage from "./../Spirits/Cocktail-14-512.jpg"

function SingleSpirit() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let {id} = useParams()
    const [spirit, setSpirit] = useState([])
    // console.log("this is scotchID:   ", id)
    useEffect(async()=>{
        const res = await fetch(`/api/scotch/${id}`)
        const data = await res.json()
        setSpirit(data)
    },[])

    return (
        <>
            <h1>Hello!</h1>
            {spirit.map((drink)=> {
                const {id, scotchName, country, region, spiritStyle, scotchUrl} = drink;
                return (
                  <div className="spirit-info-container container" key={id}>
                    <h2 className="spirit-scotchName">{scotchName}</h2>
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
                  </div>
                );
            })}
        </>
    )

}

export default SingleSpirit