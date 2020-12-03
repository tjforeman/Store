import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Components/homepage";
import Shop from "./Components/Shop/Shop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
