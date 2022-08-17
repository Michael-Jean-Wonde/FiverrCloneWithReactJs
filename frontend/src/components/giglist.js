import React, { useState, useEffect } from "react";
import "./giglist.css";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

import '../utills/i18next';
import { useTranslation } from "react-i18next";

const Gigslist = () => {
  const {t} = useTranslation();
  
  const [gigs, setGigs] = useState([
    {
      title: "",
      categoryOne: "",
      categoryTwo: "",
      serviceType: "",
      price: "",
      description: "",
      image: "",
    },
  ]);

  useEffect(() => {
    fetch("/gigsList")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setGigs(jsonRes));
  });

  return (
    <div class="container">
      <div class="row">
      {gigs.map((g) => (
        <div class="col-12 col-md-6 col-lg-4">
      
        <div class="card">
          <Row>
            <Row>
              <Col className="colImg">
                <img class="card-img-top" src={g.image} alt="Card image cap" />
              </Col>
              <Col className="tttt">
                <Row>
                  <h5 class="card-title">{g.title}</h5>
                </Row>
                <Row>
                  <p class="card-text">{g.categoryOne}</p>
                </Row>
                <Row>
                  <p class="card-text">{g.serviceType}</p>
                </Row>
                <Row>
                  <p class="card-text">{g.price}$/hr</p>
                </Row>
              </Col>
            </Row>
            <div class="card-body">
              <Row>
                <p class="card-text">{g.description}</p>
              </Row>
              <Row className="btnRow">
                <Row>
                  <Col sm="7">
                    <a href="http://localhost:1234/#" class="btn btn-primary">
                    {t("viewPortfolio")}
                    </a>
                  </Col>
                  <Col sm="4">
                    <a href="/buyer-room" class="btn btn-primary">
                    {t("Contact")}
                    </a>
                  </Col>
                </Row>
              </Row>
            </div>
          </Row>
        </div>
      
      </div>
      ))}
      </div>
    </div>
  );
};

export default Gigslist;
