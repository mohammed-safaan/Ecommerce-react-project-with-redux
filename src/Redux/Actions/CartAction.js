export function AddToCart(payload){
  return {
    type : "ADD-TO-CART",
    payload 
  }
}

export function removeFromCart(removed){
  return {
    type : "REMOVE-FROM-CART",
    payload : removed 
  }
}

export function increaseQty(product){
  return {
    type : "INCREASE-QTY",
    payload : product 
  }
}

export function decreaseQty(product){
  return {
    type : "DECREASE-QTY",
    payload : product 
  }
}

export function removeAll(){
  return {
    type : "REMOVE-ALL", 
  }
}