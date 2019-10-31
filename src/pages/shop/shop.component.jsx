import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { identifier } from "@babel/types";

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
      const { collections } = this.state;
      return (
        <div className="shop-page">
          {
            collections.map(({ id, ...otherCollectionProps }) => {
              return <CollectionPreview key={id} {...otherCollectionProps} />
            })
          }
        </div>
      );
  }
}

export default Shop;
