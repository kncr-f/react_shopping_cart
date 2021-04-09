import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {BookContext} from "../App";

const Cart = () => { 
  const context=useContext(BookContext);
  const totalCartAmount=context.state.cart.reduce((total,item)=>
  (total=total + item.count*item.price),0);
  const totalCartCount=context.state.cart.reduce((total,item)=>
  (total = total+ item.count),0);
  
  return (
    <div>
      <h2>
        <Link to="/">Book List</Link> 
        <span>My Cart ({totalCartCount}) </span>
      </h2>

      <h3>Total Amount: &#8378;{totalCartAmount.toFixed(2)}</h3>

      {context.state.cart.map((book)=>(

          <div key={book.id} className="book">
          <img
            src={book.image}
            alt={book.name}
            
          />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#8378;{book.price}</p>
            <p>Total Price: &#8378;{(book.price*book.count).toFixed(2)}</p>
            <p>You have a total of {book.count} of this book in your cart.</p>
            <button onClick={()=>context.decrease(book)} >-</button>
            <button onClick={()=>context.removeFromCart(book)} >Remove </button>
            <button onClick={()=>context.increase(book)}>+</button>
          </div>
          </div>

      ))}

    
    </div>
  );
};

export default Cart;
