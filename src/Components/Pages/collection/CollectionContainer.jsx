import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionLoaded} from '../../../Redux/shop/shopSelectors'
import WithSpinner from '../../with-spinner/WithSpinner';
import Collection from '../collection/Collection'

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoaded(state)
});

const CollectionContainer = compose(
    connect(mapStateToProps),WithSpinner
    )(Collection)

    export default CollectionContainer;