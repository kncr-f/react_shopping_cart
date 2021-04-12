import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {removeFromCart,increase,decrease} from "../actions/index";


const Cart = (props) => { 

  const totalCartAmount=props.cart.reduce((total,item)=>(total=item.price*item.count),0);
  const totalCartCount=props.cart.reduce((total,item)=>(total=total+item.count),0);
  

  
  return (
    <div>
      <h2>
        <Link to="/">Book List</Link> 
        <span>My Cart ({totalCartCount}) </span>
      </h2>

      <h3>Total Amount: &#8378;{totalCartAmount.toFixed(2)} </h3>

      {props.cart.map((book)=>(

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
            <button onClick={()=>props.decrease(book)}>-</button>
            <button onClick={()=>props.removeFromCart(book)} >Remove </button>
            <button onClick={()=>props.increase(book)} >+</button>
          </div>
          </div>

      ))} 

    
    </div>
  );
};

const mapStateToProps=state=>{
  return {
    cart:state.cart
  }
}
export default connect(mapStateToProps, {removeFromCart,increase,decrease})(Cart);
