import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Components/homepage";
import Shop from "./Components/Shop/Shop";
import Header from "./Components/Header/Header.jsx";
import Auth from "./Components/Pages/Auth.jsx";
import { auth } from "./Firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign-in" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
