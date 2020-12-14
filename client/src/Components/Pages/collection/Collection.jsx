import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../Collection-item/CollectionItem';
import { selectCollection } from '../../../Redux/shop/shopSelectors';

import './collection.scss';

const Collection = ({collection}) => {
    console.log(collection)
    return (
        <div className = 'collection'>
            <h2>collection page</h2>
            
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);