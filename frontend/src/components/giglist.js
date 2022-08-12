import React from "react";
import './giglist.css';
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

function Gigslist({ gigData }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Link to={`/gig/${gigData._id}`}>
          <Card.Img variant="top" alt="Card image" src={gigData.image} />
        </Link>
        <Card.Body>
          <Link to={`/gig/${gigData._id}`} id="linkcolor">
            <Card.Title id="fonp">{gigData.title}</Card.Title>
          </Link>
          <Card.Text>{gigData.name}</Card.Text>
          <Row id="fnpoop">
            <Col>
            <FontAwesomeIcon icon={faStar} color="#FFD700"></FontAwesomeIcon>
            <span id="fnp">5(11)</span>
            </Col>
          </Row>
          <Row id="fnoop">
            <Col sm='4'>
            <FontAwesomeIcon icon={faHeart} color="#B5B6BA"></FontAwesomeIcon>
            </Col>
            <Col>
            <Card.Text>
                <span id="fnp">STARTING AT ${gigData.price[0].name}</span>
            </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Gigslist;
