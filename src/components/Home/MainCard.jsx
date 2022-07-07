import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsCartPlusFill } from "react-icons/bs";
import { connect } from "react-redux";
import { AddToCart } from "../../Redux/Actions/CartAction";

function MainCard(props) {
  const { title, desc, imgSrc, price, product, addToCart } = props
  return (
    <>
      <Card bg="dark" text="light" style={{ maxHeight: '500px',  marginBottom: '35px' }}>
        <div style={{ height: '250px' }}>
          <Card.Img 
            style={{ 
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
            variant="top"
            src={imgSrc}
          />
        </div>
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text className="text-truncate">{desc}</Card.Text>
          <Card.Text className="d-flex justify-content-between">
            <span className="px-3 py-1 rounded-pill bg-dark text-light fw-bold">
              {price} $
            </span>
            <Button
              variant="primary"
              className="rounded-pill px-3 py-1 center"
              onClick={() => addToCart(product)}
            >
              <BsCartPlusFill size={25} />
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(AddToCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(MainCard);
