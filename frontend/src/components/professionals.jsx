import React from "react";
import "./professionals.css";
import './giglist.css';
import { Link } from "react-router-dom";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Card } from "react-bootstrap";

const Professionals = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) => {
  return (
    <div className="professional">
      {/* <div className="info">
        <Link to='/singleProfessional' className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
          <strong>/Hr</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        </div>
        <img src={image} alt='' />
        <button>
          <i>
            <ContactMailOutlinedIcon />
          </i>
          Contact professional
        </button> */}

        <Card style={{ width: "18rem" }} className="proCard">
        <Link to='/singleProfessional'>
          <Card.Img variant="top" alt="Card image" src={image} />
        </Link>
        <Card.Body>
          <Link to='/singleProfessional' id="linkcolor">
            <Card.Title id="fonp">{title}</Card.Title>
          </Link>
          <Row id="fnpoop">
          <Card.Text>{Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}</Card.Text>
          </Row>
          <Row id="fnoop">
            <Col sm='4'>
            <FontAwesomeIcon icon={faHeart} color="#B5B6BA"></FontAwesomeIcon>
            </Col>
            <Col>
            <Card.Text>
                <span id="fnp">STARTING AT ${price}</span>
            </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default Professionals;
