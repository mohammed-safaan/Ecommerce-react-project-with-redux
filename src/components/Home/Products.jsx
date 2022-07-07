/* eslint-disable */ 
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MainCard from "./MainCard";
import { GetAllProducts } from "../../Redux/Actions/GetAllProducts";
import { Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";

function Products(props) {
  const { productsData, getProducts } = props;
  const [SearchValue, setSearchValue] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container fluid>
      <InputGroup className="my-3 w-75 mx-auto">
        <Form.Control 
          style={{ accentColor: '#fff', color: '#fff' }}
          className="bg-dark"
          aria-label="Text input with checkbox"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <InputGroup.Text 
          style={{ color: '#fff' }}
          className="bg-dark"
          id="inputGroup-sizing-sm">
          <FaSearch />
        </InputGroup.Text>
      </InputGroup>
      <Row>
        {productsData &&
          productsData
            .filter((product) =>
              product.title.toLowerCase().includes(SearchValue.toLowerCase())
            )
            .map((product, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-4">
                  <MainCard
                    imgSrc={product.image}
                    title={product.title}
                    desc={product.description}
                    price={product.price}
                    product={product}
                  />
                </div>
              );
            })}
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    productsData: state.allProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(GetAllProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
