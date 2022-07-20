import React from "react";
import UserHeader from "../components/userHeader";
import { Button, Card, ListGroup, Row, Col, Container, ListGroupItem } from "react-bootstrap";

const Gigs = () => {
  return (
    <div>
      <UserHeader />
      <Container>
        <Row>
          <Col sm="9">
            <h1 className="font">Gigs</h1>
          </Col>
          <Col>
            <a href="/create-gig">
              <Button className="creategig" variant="success">
                CREATE A NEW GIG
              </Button>
            </a>
          </Col>
        </Row>
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col sm='4'><b>Gig</b></Col>
                        <Col sm='2'><b>Impressions</b></Col>
                        <Col sm='2'><b>CLICK</b></Col>
                        <Col sm='2'><b>ORDERS</b></Col>
                        <Col sm='2'><b>CANCELATION</b></Col>
                    </Row>
                </ListGroup.Item>
                <div>
                    <ListGroup.Item>
                        <Row>
                            <Col sm='1'>
                                <img src="images/portfolio2.jpg" alt="img" width='30' height='30'/>
                            </Col>
                            <Col sm='3'>Title</Col>
                            <Col sm='2'>0</Col>
                            <Col sm='2'>0</Col>
                            <Col sm='2'>0</Col>
                            <Col sm='2'>0</Col>
                        </Row>
                    </ListGroup.Item>
                </div>
            </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default Gigs;
