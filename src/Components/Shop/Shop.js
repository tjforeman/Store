import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../collections-overview/CollectionsOverview";
import Collection from "../Pages/collection/Collection";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/firebase.utils";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionsSnapshotToMap(snapshot);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

export default Shop;
