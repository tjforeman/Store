// import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionFetching} from '../../Redux/shop/shopSelectors';
import WithSpinner from '../with-spinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';



const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps), WithSpinner)(CollectionsOverview);



export default CollectionsOverviewContainer