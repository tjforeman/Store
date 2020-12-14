import React from 'react';
import { connect } from 'react-redux'; 
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../Preview-collection/PreviewCollection';
import { selectCollection } from "../../Redux/shop/shopSelectors";

import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className = 'collections-overview'>
             {collections.map(({ id, ...CollectionProps }) => (
        <PreviewCollection key={id} {...CollectionProps} />
      ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollection,
  });

export default connect(mapStateToProps)(CollectionsOverview);