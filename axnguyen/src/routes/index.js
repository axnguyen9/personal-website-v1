import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {HomeScreen} from "../screens/homeScreen";
import {AboutScreen} from "../screens/aboutScreen";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

import "./routes.css";

function Routes(props) {
  return (
    <div className="pageContainer">
      <div className="contentWrap">
        <Router>
          <nav><NavBar /></nav>
          <Switch>
            <Route exact path={"/"} component={HomeScreen} />
            <Route exact path={"/about"} component={AboutScreen} />
          </Switch>
        </Router>
      </div>
      <footer><Footer /></footer>
    </div>
  );
}

export default Routes;
