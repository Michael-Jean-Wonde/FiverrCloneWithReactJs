import React from "react";
import { Row, Col, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../action/userAction.js";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const BuyerHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = (e)=>{
    e.preventDefault();
    dispatch(logout());
  }
  return (
    <div className="userMenu">
      <Row>
        <Col sm="10">
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
              <a href="/profile">profile</a>
            </li>
            <li>
              <a href="/">Messages</a>
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
                        <NavDropdown.Item onClick={logoutHandler}>
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
