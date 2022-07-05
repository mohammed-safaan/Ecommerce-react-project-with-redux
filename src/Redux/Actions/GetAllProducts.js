import axios from "axios";
export function GetAllProducts() {
  const AllProducts = axios
    .get("https://fakestoreapi.com/products")
    .then((result) => {
      return result.data
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    type: "GET-ALL-PRODUCTS",
    payload: AllProducts,
  };
}
