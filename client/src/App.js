import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Components/homepage";
import Shop from "./Components/Shop/Shop";
import Header from "./Components/Header/Header.jsx";
import Auth from "./Components/Pages/Auth.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-in" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
