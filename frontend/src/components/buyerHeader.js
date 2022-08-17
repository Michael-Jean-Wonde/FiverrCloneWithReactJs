import React from "react";
import "./userHeader.css";
import { Row, Col, Button } from "react-bootstrap";
import { logout } from "../action/userAction.js";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';

import '../utills/i18next';
import { useTranslation } from "react-i18next";

const BuyerHeader = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            className="header__logo"
            src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521"
            alt="logo"
            width="200px"
          />
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <a class="nav-link" href="/dashboard">
            {t("dashboard")}
            </a>
            <a class="nav-link" href="/profile">
            {t("professionals")}
            </a>
            <a class="nav-link" href="/buyer-room">
            {t("messages")}
            </a>
            <a class="nav-link" href="/postRequest">
            {t("postRequest")}
            </a>
            <a class="nav-link" href="/mypost">
            {t("myPost")}
            </a>
          </div>
          <div class="navbar-nav ms-auto" style={{marginRight: "100px", }}>
            <a href="/join">
              <Button variant="outline-success" style={{marginRight: "30px", }}>Become A Seller</Button>{" "}
            </a>

            <a href="/">
              <Button
                variant="outline-success"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BuyerHeader;
