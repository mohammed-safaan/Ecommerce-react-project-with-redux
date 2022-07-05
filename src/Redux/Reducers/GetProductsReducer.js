export function GetProductsReducer(state=[],action){
  if (action.type === "GET-ALL-PRODUCTS"){
    return action.payload;
  }
  return state
}
