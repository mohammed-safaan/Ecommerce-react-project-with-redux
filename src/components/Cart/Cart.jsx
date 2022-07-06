import React from "react";
import { connect } from "react-redux";
import { IoCartSharp } from "react-icons/io5";
import { Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Cart(props) {
  const { totalQty } = props;
  return (
    <>
      <NavLink to="/cartpage" className="text-decoration-none">
        <div
          className="text-dark bg-light
        center justify-content-between
        px-3 py-1 rounded-pill"
        >
          <IoCartSharp size={40} />
          <Badge className="ms-2" bg="danger">
            {totalQty}
          </Badge>
        </div>
      </NavLink>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    totalQty: state.cart.totalQty,
  };
};
export default connect(mapStateToProps)(Cart);
