import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { BsFillCartXFill, BsFillTrashFill } from "react-icons/bs";
import { connect } from "react-redux";
import {
  increaseQty,
  removeFromCart,
  decreaseQty,
  removeAll,
} from "../../Redux/Actions/CartAction";

function CartPage(props) {
  let { cart, removeFromCart, decreaseQty, increaseQty, removeAll } = props;
  
  // useEffect(()=> {
  //   // localStorage.cart ?console.log(cart) :cart;
  //   // console.log(localStorage.cart, cart);
  //   console.log(JSON.parse(localStorage.cart))
  // }, []);

  // useEffect(()=>{
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <Container fluid>
      <Row>
        {cart.productsInCart &&
          cart.productsInCart.map((product, index) => {
            return (
              <div key={index} className="col-sm-6 col-md-4">
                <Card bg="dark" text="light" className="mb-2">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {product.title}
                    </Card.Title>
                    <Card.Text className="text-truncate">
                      {product.description}
                    </Card.Text>
                    <div className="d-flex center justify-content-between">
                      <Card.Text className="fw-bold m-0">
                        {product.price * product.productQty} $
                      </Card.Text>
                      <Button
                        onClick={() => removeFromCart(product)}
                        variant="danger"
                        className="center"
                      >
                        <BsFillCartXFill size={25} />
                      </Button>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between center">
                    <Button
                      onClick={() => increaseQty(product)}
                      variant="primary"
                      className="center"
                    >
                      +
                    </Button>
                    <span className="badge">{product.productQty}</span>
                    <Button
                      onClick={() => decreaseQty(product)}
                      variant="danger"
                      className="center"
                    >
                      -
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            );
          })}
      </Row>
      <div
        className="sticky-bottom w-100 p-2 bg-dark text-light 
      center justify-content-evenly"
      >
        <Button
          onClick={() => removeAll()}
          variant="danger"
          className="justify-content-between center"
        >
          <BsFillTrashFill /> Remove All
        </Button>
        <div>
          Total price :
          {cart.productsInCart.length === 1
            ? cart.productsInCart.map((ele) => ele.price * ele.productQty)
            : // test.price * test.productQty
            cart.totalQty > 0
            ? cart.productsInCart.reduce((prevEle, nextEle) => {
                console.log(prevEle.price, nextEle.price);
                return (
                  prevEle.price * prevEle.productQty +
                  nextEle.price * nextEle.productQty
                );
              })
            : 0}
          $
        </div>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (removed) => dispatch(removeFromCart(removed)),
    increaseQty: (prouduct) => dispatch(increaseQty(prouduct)),
    decreaseQty: (prouduct) => dispatch(decreaseQty(prouduct)),
    removeAll: () => dispatch(removeAll()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
