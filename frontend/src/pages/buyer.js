import React, { useEffect } from "react";
import BuyerHeader from "../components/buyerHeader";
import UserDetail from "../components/userDetail";
import ProfessionalsList from "./proffessionalsList";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { gigList } from "../action/productListAction.js";
import Gigslist from "../components/giglist";

const Buyer = () => {
  return (
    <div>
      <BuyerHeader />
      <br></br>
      <ProfessionalsList /> 
    </div>
  );
};

export default Buyer;
