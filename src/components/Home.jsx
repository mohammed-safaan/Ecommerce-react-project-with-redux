import React from "react";
import MainCard from "./MainCard";

export default function Home() {
  return (
    <div>
      Home
      <MainCard
      imgSrc="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
        title="CUSTOME TILTLE"
        text="This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer."
      />

      TWO

      <MainCard
      imgSrc="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
        title="CUSTOME TILTLE"
        text="This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer."
      />
    </div>
  );
}
