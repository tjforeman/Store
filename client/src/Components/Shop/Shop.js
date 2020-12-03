import React from "react";

import myData from "../../Resources/data.js";
import PreviewCollection from "../../Components/Preview-collection/PreviewCollection";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: myData,
    };

    console.log(myData);
  }

  render() {
    const { collections } = this.state;
    console.log(this.state.collections);
    return (
      <div className="shop-page">
        {collections.map(({ id, ...CollectionProps }) => (
          <PreviewCollection key={id} {...CollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
