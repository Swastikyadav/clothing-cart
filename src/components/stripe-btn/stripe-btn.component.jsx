import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_E0VoaUR9HL6h9BwBe2StsFJh00bmw2SN9w";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Clothing Kart Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;