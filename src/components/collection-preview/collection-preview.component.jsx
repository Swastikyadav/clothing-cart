import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";

import "./collection-preview.styles.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1><Link to={`/shop/${title}`}>{title.toUpperCase()}</Link></h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
