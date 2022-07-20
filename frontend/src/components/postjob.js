import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import BuyerHeader from "../components/buyerHeader";

const Postjob = () => {
  return (
  <div>
    <BuyerHeader />
    <Container>
      <Form>
        <br />
        <h3>What Services are you looking for?</h3>
        <br />
        <Row>
          <Col sm="8">
            <h6>
              Describe the services you are looking to purchase - please do as
              detailed as possible:
            </h6>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="I am looking for..."
            ></Form.Control>
          </Col>
        </Row>
        <br/>
        <h6>Choose a Category</h6>
        <Row>
            <Col sm='4'>
                <Form.Group as={Col}>
                    <Form.Control as='select'>
                        <option>Choose</option>
                        <option>Programming</option>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col sm='4'>
                <Form.Group as={Col}>
                    <Form.Control as='select'>
                        <option>Advanced</option>
                        <option>Moderate</option>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <br/>
        <h6>Once you place your order, when would you like your service delivered?</h6>
        <Row>
            <Col>
            <input type="number" min='1' max='60'/>
            </Col>
        </Row>
        <br/>
        <h6>What is your budget for this service?</h6>
        <Row>
            <Col sm='7'>
                <input type="number" min='5' max='2000'/>$ 
            </Col>
            <Col sm='3'>
                <Button type="submit" variant="success">Post</Button>
            </Col>
        </Row>
        <br/>
      </Form>
    </Container>
  </div>
  );
};

export default Postjob;
