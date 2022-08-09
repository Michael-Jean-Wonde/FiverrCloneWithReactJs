import React from "react";
import { Row, Col, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../action/userAction.js";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const UserHeader = () => {
  const dispatch = useDispatch();
  const logoutHandler = (e)=>{
    e.preventDefault();
    dispatch(logout);
  }
  return (
    <div className="userMenu">
      <Row>
        <Col sm="9">
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
              <a href="/searchJobs">Search Jobs</a>
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
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
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
