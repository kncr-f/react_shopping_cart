import React, { createContext, useState } from 'react';
import "./styles.css";
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";


import { data } from "./data";

export const BookContext=createContext();

const App = ()=> {

const [state, setState]=useState({
  bookList:data,
  cart:[]
});



const addToCart=(item)=>setState({
  ...state, cart: state.cart.find(cartItem=>cartItem.id===item.id)?
  state.cart.map(cartItem=>cartItem.id===item.id?
    {...cartItem, count: cartItem.count+1}:cartItem):
    [...state.cart, {...item, count:1}]
});

const removeFromCart=(item)=>setState({
  ...state, cart: state.cart.filter(cartItem=>cartItem.id!==item.id)
  
});

const increase=(item)=>setState({
  ...state, cart:state.cart.map(cartItem=>
    cartItem.id===item.id?{...cartItem,count:cartItem.count+1}:cartItem)
});

const decrease=(item)=>setState({
  ...state, cart:state.cart.map(cartItem=>
    cartItem.id===item.id?{...cartItem,count:cartItem.count>1?cartItem.count-1:1}:cartItem)
});

  return (
    <BookContext.Provider value={{state:state,addToCart,removeFromCart,increase,decrease}}>
        <div className="App">
            <h1>
                Shopping Cart App
                <img
                  src="https://avatars3.githubusercontent.com/u/60869810?v=4"
                  alt="React Dersleri"
                />{" "}
                React Exercise
            </h1>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
          
    </div>

    </BookContext.Provider>
  
  );
}

export default App;
