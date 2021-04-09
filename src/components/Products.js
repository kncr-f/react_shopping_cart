import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {BookContext} from "../App";

const Products = props => {

  const context= useContext(BookContext);
  const totalCartCount=context.state.cart.reduce((total,item)=>
  (total = total+ item.count),0);
 
  return (
    <div>
      <h2> 
        <span>Book List</span>
        <Link to="/cart">My Cart ({totalCartCount})</Link>
      </h2>

      {context.state.bookList.map((book)=>(
        <div key={book.id} className="book">
          <img
            src={book.image}
            alt={book.name}
          />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#8378; {book.price}</p>
            <button onClick={()=>context.addToCart(book)}>Add my cart </button>
          </div>
        </div>
      ))}
   
    </div>
  );
};

export default Products;
