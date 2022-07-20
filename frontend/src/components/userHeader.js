import React from "react";
import { Row, Col, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UserHeader = () => {
  return (
    <div className="userMenu">
      <Row>
        <Col sm="9">
          <ul>
            <li>
              <a href="/">
                <img
                  width="80px"
                  height="35px"
                  src="images/ReactJS.png"
                  alt="logo"
                />
              </a>
            </li>
            <li>
              <a href="/user">Dashboard</a>
            </li>
            <li>
              <a href="/">Messages</a>
            </li>
            <li>
              <a href="/">Order</a>
            </li>
            <li>
              <a href="/gigs">Gigs</a>
            </li>
            <li>
              <a href="/">Analytics</a>
            </li>
            <li>
              <a href="/">Earnings</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/buyer-requests">Buyer Requests</a>
            </li>
          </ul>
        </Col>
        <Col sm="3">
          <ul>
            <li>
              <a href="/">Switch to Buying</a>
            </li>
            <li>
              <img
                src="images/company-logo.jpg"
                alt="userImages"
                width="35px"
                height="35px"
                className="userimg"
              />
            </li>
            <NavDropdown title=" " id="username">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/">
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <li>
              <p className="btnnn">$20</p>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default UserHeader;
