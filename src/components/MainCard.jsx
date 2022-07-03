import React from "react";
import { Card } from "react-bootstrap";

export default function MainCard(props) {
  const { title, text, imgSrc } = props;
  return (
    <>
      <Card bg="dark" text="light">
        <Card.Img
          variant="top"
          src={imgSrc}
          style={{ height: "fit-content" }}
        />
        <Card.Body className="">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-truncate">{text}</Card.Text>
          <div className="position-absolute top-0 bg-dark p-3">
            <div className="badge">100$</div>
            <div className="addToCart badge">add</div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
