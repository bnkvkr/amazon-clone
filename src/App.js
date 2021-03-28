/* eslint-disable eqeqeq */
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import React, { useReducer, createContext, useEffect } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import Payment from "./Payment";
const initialState = {
  basket: [],
  user: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item for basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // return {
      //   ...state,
      //   // basket: newBasket,
      //   basket: state.basket.filter((item) => item.id != action.id),
      // };
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export const context = createContext();
function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header></Header>
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/payment">
              <Header />
              <Payment />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </context.Provider>
  );
}

export default App;
