import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.css';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>
      <Link to='/'>{title.toUpperCase()}</Link>
    </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 3)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
