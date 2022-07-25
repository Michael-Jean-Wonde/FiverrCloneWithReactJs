import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../action/userAction.js";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SigninForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userinfo } = userLogin;
  const navigate = useNavigate();

  useEffect(() => {
    if (userinfo) {
      if (userinfo.isBuyer===true) {
        navigate('/user-buyer')
      }
      else {
        navigate('/user')
      }
    }
  }, [navigate,userinfo])
  

  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(login(email,password))
  }

  return (
    <div className="signindiv">
      <Form className="signinform" onSubmit={submitHandler}>
        <h4>Sign in to Fiverr</h4>
        <Form.Group className="sinfg" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email/Username"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="sinfg" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" 
          value={password}
          onChange={(e) => setpassword(e.target.value)}/>
        </Form.Group>
        {loading && <h5>....loading</h5>}
        {error && <h5>{error}</h5>}
        <Button
          className="sinfg"
          variant="success"
          size="md"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SigninForm;
