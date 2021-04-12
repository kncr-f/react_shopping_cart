import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {addToCart} from "../actions/index";

const Products = props => {
  const totalCartCount=props.cart.reduce((total,item)=>(total=total+item.count),0)


  return (
    <div>
      <h2> 
        <span>Book List</span>
        <Link to="/cart">My Cart ({totalCartCount})</Link>
      </h2>

      {props.bookList.map((book)=>(
        <div key={book.id} className="book">
          <img
            src={book.image}
            alt={book.name}
          />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#8378; {book.price}</p>
            <button  onClick={()=>props.addToCart(book)}>Add my cart </button>
          </div>
        </div>
      ))} 
   
    </div>
  );
};
const mapStateToProps=state=>{
  return {
    bookList:state.bookList,
    cart: state.cart
  }
};
export default connect(mapStateToProps,{addToCart})(Products);
