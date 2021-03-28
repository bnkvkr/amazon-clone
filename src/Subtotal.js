import React, { useContext } from "react";
import "./subtotal.css";
import { useHistory } from "react-router-dom";
import { context } from "./App";

function Subtotal() {
  const history = useHistory();
  const rcvcontext = useContext(context);
  console.log(rcvcontext.state.basket);
  var total = rcvcontext.state.basket.reduce((a, b) => a + b.price, 0);

  return (
    <div className="subtotal">
      <p>Total : {rcvcontext.state.basket.length} items</p>
      <p>Subtotal : ₹ {total} </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> Add a gift card
      </small>

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
