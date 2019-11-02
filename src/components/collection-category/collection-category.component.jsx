import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";

import "./collection-category.styles.scss";

function CollectionCategory({ items, match }) {
  return (
    <>
      <h1>{match.params.category}</h1>
      <div className="collection-category">
        <div className="item">
          {items
            .filter(item => {
              return match.params.category === item.title;
            })[0]
            .items.map(collectionItem => {
              return (
                <CollectionItem key={collectionItem.id} item={collectionItem} />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default withRouter(CollectionCategory);
