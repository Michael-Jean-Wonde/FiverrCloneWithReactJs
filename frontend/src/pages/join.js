import React, { useState, useEffect } from "react";
import './join.css';
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { register } from "../action/userAction.js";
import { useNavigate } from "react-router-dom";

import '../utills/i18next';
import { useTranslation } from "react-i18next";

const JoinForm = () => {
  const {t} = useTranslation();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [buyer, setbuyer] = useState(false);
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const userLogin = useSelector((state) => state.userLogin);
  const info = userLogin.userinfo;

  const { loading, userinfo, error } = userRegister;
  let navigate = useNavigate();

  useEffect(() => {
    if (info) {
      if (info.isAdmin === true) {
        navigate("/user-buyer");
      } else {
        navigate("/user");
      }
    }
  }, [navigate, info]);

  useEffect(() => {
    if (userinfo) {
      if (userinfo.isBuyer === true) {
        navigate("/user-buyer");
      } else {
        navigate("/user");
      }
    }
  }, [navigate, userinfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(firstname, lastname, email, password, buyer));
  };

  return (
    <div className="logonform">
      <Form onSubmit={submitHandler}>
        <h3>{t("joinUs")}</h3>
        <br></br>
        <Form.Group className="logonformgroup" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="logonformgroup" controlId="formBasicName">
          <Form.Control
            type="Name"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="logonformgroup" controlId="formBasicName">
          <Form.Control
            type="Name"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="logonformgroup" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Choose a Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="logonformgroup" controlId="formBasicName">
          <div className="nbv">
            <div className="nbvchkbox">
              <Form.Check
                custom
                type="checkbox"
                id="checkbox9"
                placeholder="Choose a UserName"
                value={true}
                onChange={(e) => setbuyer(e.target.value)}
              />
              <p>{t("joinAsBuyer")}</p>
            </div>
            <Button variant="success" size="md" block type="submit">
            {t("submit")}
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default JoinForm;
