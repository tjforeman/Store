import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectDirectorySections } from '../../Redux/directory/directorySelectors';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

const Directory = ({sections}) => { 
     return (
         <div className= 'directory-menu'>
             {
                 sections.map(({id, ...sectionProps}) => (
                     <MenuItem key={id} {...sectionProps} />
                 ))
             }
         </div>
     )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
