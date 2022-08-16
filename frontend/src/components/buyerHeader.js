import React from "react";
import './userHeader.css';
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../action/userAction.js";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const BuyerHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="userMenu">
      <Row>
        <Col sm="8">
          <ul>
            <li>
            <Link to="/">
                    <img
                        className="header__logo"
                        src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521"
                        alt="logo"
                    />
              </Link>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/profile">Professionals</a>
            </li>
            <li>
              <a href="/buyer-room">Messages</a>
            </li>
            <li>
              <a href="/postRequest">Post A Request</a>
            </li>
            <li>
              <a href="/mypost">My Post</a>
            </li>
          </ul>
        </Col>
        <Col sm="4">
          <ul>
          <li className="bli">
                <a href="/join">
                  <Button variant="outline-success">Become A Seller</Button>{" "}
                </a>
              </li>
              <li className="bli">
                <a href="/">
                  <Button variant="outline-success" onClick={()=> dispatch(logout())}>Logout</Button>{" "}
                </a>
              </li>
            {/* <li>
              <img
                width="35px"
                height="35px"
                className="userimg"
                src="images/company-logo.jpg"
                alt="userImages"
              />
            </li>
            <NavDropdown title=" " id="username">
                <LinkContainer to='/'>
                        <NavDropdown.Item onClick={()=> dispatch(logout())}>
                            Logout
                        </NavDropdown.Item>
                    </LinkContainer>
            </NavDropdown> */}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default BuyerHeader;
