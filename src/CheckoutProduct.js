import React, { useContext } from "react";
import "./CheckoutProduct.css";

import { context } from "./App";
function CheckoutProduct({ id, title, price, image, rating }) {
  const rcvcontext = useContext(context);
  console.log(id, title, price, image, rating);
  const removeFromBasket = () => {
    // console.log(rcvcontext.state);
    // remove item from basket
    rcvcontext.dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <strong>₹ </strong>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove item</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
