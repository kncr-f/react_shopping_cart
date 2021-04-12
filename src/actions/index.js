export const addToCart = (item) => {
    return { type: "ADD_TO_CART", payload: item };
  };

export const removeFromCart = (item)=>{
    return { type:"REMOVE_FROM_CART", payload:item}
};

export const increase = (item)=>{
    return {type:"INCREASE", payload:item}
};

export const decrease = (item)=>{
    return {type:"DECREASE", payload:item}
}