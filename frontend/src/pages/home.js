import React, { useEffect } from "react";
import Header from "../components/header";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { gigList } from "../action/productListAction.js";
import Gigslist from "../components/giglist";

const Home = () => {
  const giglist = useSelector((state) => state.gigList);
  const { error, loading, gig } = giglist;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gigList());
  }, [dispatch]);
  console.log(giglist);

  return (
    <div className="bgcolor">
      <Header />
      <div className="showAllGig">
        {loading ? (
          <h1>loading........</h1>
        ) : error ? (
          <h3>{error}</h3>
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

export default Home;
