import React, { useContext } from "react";

import CheckoutProduct from "./CheckoutProduct";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { context } from "./App";

function Checkout() {
  const rcvcontext = useContext(context);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {rcvcontext.state.basket.length === 0 ? (
          <div>
            <h2>Your shopping cart is empty </h2>
            <p>
              You have no items in the shopping cart. To add an item click on
              "Add to cart" under the desired product
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">
              {" "}
              Hi,{" "}
              {!rcvcontext.state.user ? "Guest" : rcvcontext.state.user.email}
            </h2>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {rcvcontext.state.basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {rcvcontext.state.basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
