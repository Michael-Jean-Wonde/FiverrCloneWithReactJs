import React, { useState, useEffect } from "react";
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
  const [jobs, setjobs] = useState([
    {
      maintitle: "",
      category: "",
      category2: "",
      days: "",
      price: "",
    },
  ]);

  useEffect(() => {
    fetch("/jobsList")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setjobs(jsonRes));
  });

  return (
    <div>
      <BuyerHeader />
      <br/>
      <Container>
        
            
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
            {jobs.map(
          (j) => (
            <div>
                <ListGroup.Item>
                    <Row>
                        <Col sm='2'>{j.category}</Col>
                        <Col sm='4'>{j.maintitle}</Col>
                        <Col sm='2'>{j.days}</Col>
                        <Col sm='2'>{j.price}</Col>
                        <Col sm='2'>{j.category2}</Col>
                    </Row>
                </ListGroup.Item>
            </div>
            )
            )}
          </ListGroup>
        </Card>
          
        <br></br>
        
      </Container>
    </div>
  );
};

export default Mypost;
