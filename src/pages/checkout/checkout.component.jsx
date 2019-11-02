import React from "react";
import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-btn/stripe-btn.component";

import "./checkout.styles.scss";

function CheckoutPage({ cartItems }) {
  let total = cartItems.reduce((acc, cartItem) => {
    acc += (cartItem.price * cartItem.quantity);
    return acc;
  }, 0);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        TOTAL: { total }
      </div>
      <StripeCheckoutButton price={ total } />
      <div className="test-warning">
        ** Test Credentials: ** <br />
        Card Number: <strong>4242 4242 4242 4242</strong>
        Expiry: <strong>01/20</strong>
        CVV: <strong>123</strong>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CheckoutPage);
