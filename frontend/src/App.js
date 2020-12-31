import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/Home"
import Spirits from "./components/Spirits"
import Speakeasy from "./components/Speakeasy"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  let history = useHistory()
const handleClick = () => {
  history.push('/scotch')
}
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <Switch>
            {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/scotch">
              <Spirits />
            </Route>
            <Route path="/speakeasy">
              <Speakeasy />
            </Route>
          </Switch>
          <button type="submit" onClick={handleClick}>
            Browse Scotch
          </button>
        </>
      )}
    </>
  );
}

export default App;
