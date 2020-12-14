import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../../Components/Preview-collection/PreviewCollection";

import { selectCollection } from "../../Redux/shop/shopSelectors";

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...CollectionProps }) => (
        <PreviewCollection key={id} {...CollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollection,
});
export default connect(mapStateToProps)(Shop);
