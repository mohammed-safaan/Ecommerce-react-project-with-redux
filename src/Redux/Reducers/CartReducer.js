let intialState = {
  productsInCart: [],
  totalQty: 0,
};

export function CartReducer(state = intialState, action) {
  // add to cart
  if (action.type === "ADD-TO-CART") {
    const isExist = state.productsInCart.find((ele) => {
      return ele.id === action.payload.id;
    });
    if (isExist) {
      const element = state.productsInCart.find(
        (ele) => ele.id === action.payload.id
      );
      element.productQty += 1;
    } else {
      let updateCart = {
        ...action.payload,
        productQty: 1,
      };
      state.productsInCart.push(updateCart);
    }
    return {
      ...state,
      totalQty: state.totalQty + 1,
    };
  }

  // remove from cart
  if (action.type === "REMOVE-FROM-CART") {
    
    const qtyToDecrease = state.productsInCart.find((ele) => {
      return action.payload.id === ele.id;
    });
    state.totalQty -= qtyToDecrease.productQty;

    let remained = state.productsInCart.filter((product) => {
      return action.payload.id !== product.id;
    });
    state.productsInCart = remained;
    return {
      ...state,
    };
  }

  // increase qty
  if (action.type === "INCREASE-QTY") {
    let toBeIncreased = state.productsInCart.find((product) => {
      return action.payload.id === product.id;
    });
    toBeIncreased.productQty += 1;
    state.totalQty += 1;
    return {
      ...state,
    };
  }

  // decrease qty
  if (action.type === "DECREASE-QTY") {
    let toBeDecreased = state.productsInCart.find((product) => {
      return action.payload.id === product.id;
    });
    if (toBeDecreased.productQty > 1) {
      toBeDecreased.productQty -= 1;
      state.totalQty -= 1;
    }
    return {
      ...state,
    };
  }
  // remove all
  if (action.type === "REMOVE-ALL") {
    state.productsInCart = [];
    state.totalQty = 0;
    state.totalPrice = 0;
    return {
      ...state,
    };
  }

  return state;
}
