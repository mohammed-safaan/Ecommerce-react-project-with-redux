import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsCartPlusFill } from "react-icons/bs";

export default function MainCard(props) {
  const { title, desc, imgSrc, price } = props;
  return (
    <>
      <Card bg="dark" text="light">
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-truncate">{desc}</Card.Text>
          <Button variant="primary">
            <BsCartPlusFill size={40} />
          </Button>
          <span className="px-3 py-1 rounded-pill">{price}"$"</span>
        </Card.Body>
      </Card>
      {/* <Card bg="dark" text="light">
        <Card.Img
          variant="top"
          src={imgSrc}
          style={{ height: "fit-content" }}
        />
        <Card.Body className="">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-truncate">{desc}</Card.Text>
          <div className="position-absolute top-0 start-0 bg-transparent p-0 w-100 d-flex justify-content-between">
            <div className="bg-dark px-5 py-3 text-light rounded-pill">
              {price}
            </div>
            <div className="addToCart bg-dark p-3 rounded-circle">
              <BsCartPlusFill size={40} />
            </div>
          </div>
        </Card.Body>
      </Card> */}
    </>
  );
}
