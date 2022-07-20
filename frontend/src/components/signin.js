import React from "react";
import { Form, Button } from "react-bootstrap";

const SigninForm = () => {
  return (
    <div className="signindiv">
      <Form className="signinform">
        <h4>Sign in to Fiverr</h4>
        <Form.Group className="sinfg" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email/Username" />
        </Form.Group>
        <Form.Group className="sinfg" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="sinfg" variant="success" size="md" block type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SigninForm;
