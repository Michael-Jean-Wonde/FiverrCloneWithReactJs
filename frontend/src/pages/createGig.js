import React, { useState } from "react";
import "./createGig.css";
import UserHeader from "../components/userHeader";
import { Button, Form, Card, Col, Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import FileBase64 from "react-file-base64";

import '../utills/i18next';
import { useTranslation } from "react-i18next";

const CreateGig = () => {
  const {t} = useTranslation();
  const [input, setInput] = useState({
    title: "",
    categoryOne: "",
    categoryTwo: "",
    serviceType: "",
    price: "",
    description: "",
    image: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newGig = {
      title: input.title,
      categoryOne: input.categoryOne,
      categoryTwo: input.categoryTwo,
      serviceType: input.serviceType,
      price: input.price,
      description: input.description,
      image: input.image,
    };
    axios.post("http://localhost:5000/addGig", newGig);
    console.log(newGig);
  }

  makeStyles((theme) => ({
    root: {
      "& > * + *": {
        marginTop: theme.spacing(9),
      },
    },
  }));
  return (
    <div className="mainnnn">
      <UserHeader />
      <div className="creategigs">
        <Form>
          <Container>
            <Card style={{ width: "45rem" }}>
              <Card.Body>
                <Row className="bnm">
                  <Col sm="3">{t("taskTitle")}</Col>
                  <Col className="bnm" sm="9">
                    <Form.Control
                      name="title"
                      value={input.title}
                      onChange={handleChange}
                    ></Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">{t("category")}</Col>
                  <Col sm="4" style={{ marginTop: "10px" }}>
                    <select
                      className="form-control"
                      name="categoryOne"
                      value={input.categoryOne}
                      onChange={handleChange}
                    >
                      <option>{t("choose")}</option>
                      <option>{t("programming")}</option>
                      <option>{t("programming")}</option>
                      <option>{t("programming")}</option>
                    </select>
                  </Col>
                  <Col sm="4" style={{ marginTop: "10px" }}>
                    <select
                      class="form-control"
                      name="categoryTwo"
                      value={input.categoryTwo}
                      onChange={handleChange}
                    >
                      <option>{t("choose")}</option>
                      <option>{t("advanced")}</option>
                      <option>{t("moderate")}</option>
                      <option>{t("novice")}</option>
                    </select>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">{t("serviceType")}</Col>
                  <Col sm="4" style={{ marginTop: "10px" }}>
                    <select
                      className="form-control"
                      name="serviceType"
                      value={input.serviceType}
                      onChange={handleChange}
                    >
                      <option>{t("choose")}</option>
                      <option>{t("remote")}</option>
                      <option>{t("fullTime")}</option>
                      <option>{t("partTime")}</option>
                    </select>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col sm="3">t{("price")}</Col>
                  <Col>
                    <input
                      name="price"
                      type="number"
                      step="5"
                      max="10000"
                      style={{ lineHeight: 1.5 }}
                      value={input.price}
                      onChange={handleChange}
                    />
                    $/Hr
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col sm="3">{t("description")}</Col>
                  <Col sm="9" className="bnm">
                    <div className="form-group">
                      <textarea
                        name="description"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={input.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" style={{ marginTop: "10px" }}>
                  {t("image")}
                  </Col>
                  <Col className="bnm">
                    <div className="form-group" style={{ lineHeight: 2, marginTop: "15px" }}>
                      <FileBase64
                        multiple={false}
                        onDone={({ base64 }) =>
                          setInput({ ...input, image: base64 })
                        }
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Row>
              <Col sm="1">
                <Button variant="success" type="cancel">
                {t("cancel")}
                </Button>
              </Col>
              <Col sm="1">
                <Button type="submit" variant="success" onClick={handleClick}>
                {t("save")}
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </div>
  );
};

const top10 = [
  { title: "JavaScript", year: 1994 },
  { title: "React", year: 1999 },
  { title: "webdevelopment", year: 1994 },
  { title: "Flutter", year: 1999 },
  { title: "Mern", year: 1994 },
];

export default CreateGig;
