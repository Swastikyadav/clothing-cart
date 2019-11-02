import React from "react";
import { connect } from "react-redux";

import { addItems } from "../../redux/cart/cart.action";
import { clearItemFromCart } from "../../redux/cart/cart.action";
import { removeItem } from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          style={{ fontWeight: "bold", fontSize: "25px", cursor: "pointer" }}
          onClick={() => removeItem(cartItem)}
        >
          {" "}
          -{" "}
        </span>
        {quantity}
        <span
          style={{ fontWeight: "bold", fontSize: "25px", cursor: "pointer" }}
          onClick={() => addItem(cartItem)}
        >
          {" "}
          +{" "}
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItems(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
