import React from "react";
import './gigs.css';
import UserHeader from "../components/userHeader";
import { Button, Card, ListGroup, Row, Col, Container, ListGroupItem } from "react-bootstrap";

import '../utills/i18next';
import { useTranslation } from "react-i18next";

const Gigs = () => {
  const {t} = useTranslation();
  return (
    <div>
      <UserHeader />
      <Container>
        <Row>
          <Col sm="9">
            <h1 className="font">{t("gigs")}</h1>
          </Col>
          <Col>
            <a href="/create-gig">
              <Button className="creategig" variant="success">
              {t("createGigs")}
              </Button>
            </a>
          </Col>
        </Row>
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col sm='4'><b>{t("gigs")}</b></Col>
                        <Col sm='2'><b>{t("impressions")}</b></Col>
                        <Col sm='2'><b>{t("click")}</b></Col>
                        <Col sm='2'><b>{t("orders")}</b></Col>
                        <Col sm='2'><b>{t("cancelation")}</b></Col>
                    </Row>
                </ListGroup.Item>
                <div>
                    <ListGroup.Item>
                        <Row>
                            <Col sm='1'>
                                <img src="images/portfolio2.jpg" alt="img" width='30' height='30'/>
                            </Col>
                            <Col sm='3'>{t("title")}</Col>
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
