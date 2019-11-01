import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {
          cartItems.reduce((acc, cartItem) => {
            acc += cartItem.quantity;
            return acc;
          }, 0)
        }
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
