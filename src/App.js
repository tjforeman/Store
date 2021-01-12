import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Homepage from "./Components/homepage/homepage";
import Shop from "./Components/Shop/Shop";
import Header from "./Components/Header/Header.jsx";
import Auth from "./Components/Pages/Auth.jsx";
import Checkout from "./Components/Checkout/Checkout";

import { setCurrentUser } from "./Redux/user/user.actions";
import { selectCurrentUser } from "./Redux/user/user.selector";
import { checkUserSession } from "./Redux/user/user.actions";

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />

        <Route
          path="/sign-in"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <Auth />
          }
        />
      </Switch>
    </div>
  );
};

const MapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(MapStateToProps, mapDispatchToProps)(App);
