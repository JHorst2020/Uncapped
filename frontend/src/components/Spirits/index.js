import { useState, useEffect } from "react";
import "./Spirit.css"
import scotchImage from "./Cocktail-14-512.jpg"
import { Switch, Route } from "react-router-dom";
import SingleSpirit from "../SingleSpirit";

function Spirits() {
  const [query, setQuery] = useState("");
  //eventually set state to redux
  const [spirits, setSpirits] = useState([]);
  console.log(spirits)
  useEffect(async() => {
    
      const res = await fetch(`/api/scotch`);
      const data = await res.json();
      setSpirits(data);
  }, []);
  const submitForm = async (e) => {
    e.preventDefalt();
    try {
      const res = fetch(`/api/scotch`);
      const data = await res.json();
      setSpirits(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input
          placeholder="🥃 Find a spirit"
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </form>
      <h1>Spirits</h1>
      {spirits.map((spirit, index, array) => {
        const { id, scotchName, country, region, spiritStyle, scotchUrl } = spirit;
        let scotchNameMatches = scotchName.includes(query.toString());
        // console.log("this is scotchNameMatches:   ", scotchNameMatches, "this is scotch name:   ", scotchName)
        let regionMatches = region === query;
        // let scotchUrlMatches = scotchUrl.includes(query.toString());
        if (scotchNameMatches || regionMatches ||  query === "" ) {
          // console.log(index)
          return (
            <div
              className="spirit-info-container container"
              key={id}
            >
              <h2 className="spirit-scotchName">{scotchName}</h2>
              <div className="spirit-country">Country: {country}</div>
              <div className="spirit-state">Region: {region}</div>
              <div className="spirit-style">Style: {spiritStyle}</div>
              <a className="spirit-scotchUrl" href={`scotch/${id}`}>
                <img
                  className="scotch-photo"
                  src={scotchUrl ? scotchUrl : scotchImage}
                  alt={`"${scotchName}"`}
                ></img>
              </a>
              
            </div>
          )}  }
        
    )}
    </>
  );
}
export default Spirits;
