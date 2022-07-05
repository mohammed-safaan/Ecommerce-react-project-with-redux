import React, { useEffect } from "react";
import { connect } from "react-redux";
import MainCard from "./MainCard";
import { GetAllProducts } from "../../Redux/Actions/GetAllProducts";
import { Container, Row } from "react-bootstrap";

function Products(props) {
  const { productsData , GetProducts } = props;
  useEffect(() => {
    GetProducts();
  }, []);
  return (
    <Container fluid>
      <Row>
        {productsData &&
          productsData.map((product, index) => {
            return (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3" >
                <MainCard
                  imgSrc={product.image}
                  title={product.title}
                  desc={product.description}
                  price={product.price}
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
    GetProducts: () => dispatch(GetAllProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
