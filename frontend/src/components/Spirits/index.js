import { useState, useEffect } from "react";
import "./Spirit.css"
import scotchImage from "./Cocktail-14-512.jpg"
import { Switch, Route, Link } from "react-router-dom";
import SingleSpirit from "../SingleSpirit";
import CreateNewScotch from "../CreateNewScotch"

function Spirits() {
  const [query, setQuery] = useState("");
  //eventually set state to redux
  const [spirits, setSpirits] = useState([]);
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
    }
  };
  return (
    <div>
      <h1>Spirits</h1>
      <form onSubmit={submitForm}>
        <input className="scotch-search-bar"
          placeholder="🥃 Find a spirit"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </form>
      <CreateNewScotch />
      <div className="scotch-page">
        {spirits.map((spirit, index, array) => {
          const {
            id,
            scotchName,
            country,
            region,
            spiritStyle,
            scotchUrl,
          } = spirit;
          let scotchNameMatches = scotchName.includes(query.toString());
          let regionMatches = region === query;
          if (scotchNameMatches || regionMatches || query === "") {
            return (
              <div className="spirit-info-container container" key={id}>
                <div className="scotch-div-1"></div>
                <div className="scotch-div-2">
                  <Link to={`scotch/${id}`}>
                    <h4 className="spirit-scotchName">{scotchName}</h4>
                  </Link>
                  <div className="spirit-country">Country: {country}</div>
                  <div className="spirit-state">Region: {region}</div>
                  <div className="spirit-style">Style: {spiritStyle}</div>
                  <Link to={`scotch/${id}`}>
                    <img
                      className="scotch-photo"
                      src={scotchUrl ? scotchUrl : scotchImage}
                      alt={`"${scotchName}"`}
                    ></img>
                  </Link>
                </div>
                <div className="scotch-div-3"></div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default Spirits;
