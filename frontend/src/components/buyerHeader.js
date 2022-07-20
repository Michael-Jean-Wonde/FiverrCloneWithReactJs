import React from "react";
import { Row, Col, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const BuyerHeader = () => {
  return (
    <div className="userMenu">
      <Row>
        <Col sm="10">
          <ul>
            <li>
              <a href="/">
                <img
                  width="90px"
                  height="40px"
                  src="images/ReactJS.png"
                  alt="logo"
                />
              </a>
            </li>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/">Messages</a>
            </li>
            <li>
              <a href="/">Orders</a>
            </li>
            <li>
              <a href="/">Analytics</a>
            </li>
            <li>
              <a href="/">community</a>
            </li>
            <li>
              <a href="/postRequest">Post A Request</a>
            </li>
            <li>
              <a href="/mypost">My Post</a>
            </li>
          </ul>
        </Col>
        <Col sm="2">
          <ul>
            <li>
              <img
                width="35px"
                height="35px"
                className="userImg"
                src="images/company-logo.jpg"
                alt="userImages"
              />
            </li>
            <NavDropdown title=" " id="username">
                <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                        Profile
                    </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/'>
                        <NavDropdown.Item>
                            Logout
                        </NavDropdown.Item>
                    </LinkContainer>
            </NavDropdown>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default BuyerHeader;
