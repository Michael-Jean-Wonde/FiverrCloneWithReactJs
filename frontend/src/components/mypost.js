import React from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import BuyerHeader from "./buyerHeader";

const Mypost = () => {
  return (
    <div>
        <BuyerHeader />
      <Container>
        <br />
        <Card>
          <ListGroup>
            <ListGroup.Item>
              <h6>Active Post</h6>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col sm='2'><b>Date</b></Col>
                    <Col sm='4'><b>REQUEST</b></Col>
                    <Col sm='2'><b>DURATION</b></Col>
                    <Col sm='2'><b>BUDGET</b></Col>
                    <Col sm='2'><b>RECIVED REQUEST</b></Col>
                </Row>
            </ListGroup.Item>
            <div>
                <ListGroup.Item>
                    <Row>
                        <Col sm='2'>Feb/8/2021</Col>
                        <Col sm='4'>Title</Col>
                        <Col sm='2'>Days</Col>
                        <Col sm='2'>Price</Col>
                        <Col sm='2'>Number of Recived Request</Col>
                    </Row>
                </ListGroup.Item>
            </div>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default Mypost;
