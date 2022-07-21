import React from "react";
import { Form, Button } from "react-bootstrap";

const JoinForm = () => {
  return (
    <div className="logonform">
      <Form>
        <h3>Sign Up to Fiverr</h3>
        <br></br>
        <Form.Group className="logonformgroup" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="logonformgroup" controlId="formBasicName">
          <Form.Control type="Name" placeholder="Choose a UserName" />
        </Form.Group>
        <Form.Group className="logonformgroup" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Choose a Password" />
        </Form.Group>
        <Form.Group className="logonformgroup" controlId="formBasicName">
          <div className="nbv">
            <div className="nbvchkbox">
            <Form.Check
              custom
              type="checkbox"
              id="checkbox9"
              placeholder="Choose a UserName"
            />
            <p>Join as a Buyer</p>
            </div>
            <Button variant="success" size="md" block type="submit">
            Submit
          </Button>
          </div>
          
        </Form.Group>
      </Form>
    </div>
  );
};

export default JoinForm;
