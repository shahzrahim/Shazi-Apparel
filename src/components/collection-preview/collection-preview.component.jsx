import React from "react";

import {CollectionItem} from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

export const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, id) => id < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps}/>
        ))}
    </div>
  </div>
);
