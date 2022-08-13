import React, { useEffect } from "react";
import BuyerHeader from "../components/buyerHeader";
import UserDetail from "../components/userDetail";
import ProfessionalsList from "./proffessionalsList";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { gigList } from "../action/productListAction.js";
import Gigslist from "../components/giglist";

const Buyer = () => {
  const giglist = useSelector((state) => state.gigList);
  const { error, loading, gig } = giglist;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gigList());
  }, [dispatch]);
  console.log(giglist);
  return (
    <div>
      <BuyerHeader />
      {/* <ProfessionalsList /> */}
      <br></br>
      <div className="showAllGig">
        {loading ? (
          <h1>loading........</h1>
        ) : error ? (
          <h2>error</h2>
        ) : (
          <Row>
            {gig.map((gi) => (
              <Col key={gig.id} sm={12} md={6} lg={4}>
                <Gigslist gigData={gi} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default Buyer;
