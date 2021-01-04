import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Homepage from "./Components/homepage/homepage";
import Shop from "./Components/Shop/Shop";
import Header from "./Components/Header/Header.jsx";
import Auth from "./Components/Pages/Auth.jsx";
import Checkout from "./Components/Checkout/Checkout";

import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from "./Firebase/firebase.utils";

import { setCurrentUser } from "./Redux/user/user.actions";
import { selectCurrentUser } from "./Redux/user/user.selector";
// import { selectCollectionsForPreview } from "./Redux/shop/shopSelectors";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
  }
}

const MapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(MapStateToProps, mapDispatchToProps)(App);
