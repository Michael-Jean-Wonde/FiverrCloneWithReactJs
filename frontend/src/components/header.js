import React, { useState } from "react";
import './header.css';
import { Button, Row, Col, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Slider from "./slider";
import Features from "./intro/features";
import Content from "./intro/content";
import Projects from "./intro/projects";
import SigninForm from "./signin.js";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import '../utills/i18next';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0px white",
    display: "flex",
    width: "30%",
    height: "45%",
    padding: "15px",
    alignItems: "left",
    boxShadow: theme.spacing(2, 4, 3),
  },
}));

const Header = () => {
  const {t} = useTranslation();
  const [navbar, setNavbar] = useState();
  const classes = useStyles();
  const [open, setopen] = React.useState();
  const handleOpen = () => {
    console.log("opened");
    setopen(true);
    console.log("opens");
  };
  const handleClose = () => {
    setopen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <div className={navbar ? "nn active" : "nn"}>
        <Row className="containerh">
          <div className="nm1">
            <Col className="col1">
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                color={navbar ? "black" : "white"}
                id="barIcon"
              />
              <div className="nm">
                <div className={navbar ? "disactive" : "logo"}>
                  <img src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521" alt="logo" />
                  <div className="dot"></div>
                </div>
              </div>
              <div className={navbar ? "logo" : "disactive"}>
                <img src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521" alt="logo" />
              </div>
              <div className={navbar ? "searchBar" : "searchBar searbarhide"}>
                <Form inline className="form">
                  <img
                    className="searchlogo"
                    src="images/search-icon.png"
                    alt="logo"
                  />
                  <FormControl
                    type="text"
                    placeholder={t("headerSerch")}
                    className="mr-lg-0"
                  />
                  <button className="btnn">{t("search")}</button>
                </Form>
              </div>
            </Col>

            <ul className="navigation">
              <li className="tli">
                <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                {t("BecomeSeller")}
                </a>
              </li>
              <li
                className={
                  navbar ? "signinli linkcolor" : "signinli disactivecolor"
                }
                onClick={handleOpen}
              >
                {t("sign_in")}
              </li>
              <li className="bli">
                <a href="/join">
                  <Button variant="outline-success">{t("join")}</Button>{" "}
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </div>
      <div>
        <Slider />
        <br/>
        <Features />
        <Content />
        <Projects />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <SigninForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Header;
