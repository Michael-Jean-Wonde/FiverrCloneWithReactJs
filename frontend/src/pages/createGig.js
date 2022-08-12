import React, { useState, useEffect } from "react";
import './createGig.css';
import UserHeader from "../components/userHeader";
import { Button, Form, Card, Col, Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Chip } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { createGig } from "../action/productListAction";
import { useDispatch, useSelector } from "react-redux";

const CreateGig = () => {
  const [maintitle, setMaintitle] = useState("");
  const [category, setCategory] = useState("");
  const [category2, setCategory2] = useState("");
  const [services, setServices] = useState("");
  const [metadata, setMetadata] = useState(false);
  const [tag, setTag] = useState([]);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const creategigdata = useSelector((state) => state.creategigdata);
  const { gig } = creategigdata;
  const { userinfo } = userLogin;

  let navigate = useNavigate();
  useEffect(() => {
    if (userinfo) {
      if (userinfo.isBuyer === true) {
        navigate("/");
      }
    } else {
      navigate("/");
    }
    if (gig) {
      navigate("/create-gig2");
    }
  }, [navigate, gig, userinfo]);
  console.log(gig);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createGig(maintitle,category,category2,services,metadata,tag));
  };

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
        <Form onSubmit={submitHandler}>
          <Container>
            <Card style={{ width: "45rem" }}>
              <Card.Body>
                <Row className="bnm">
                  <Col sm="3">GIG TITLE</Col>
                  <Col className="bnm" sm="9">
                    <Form.Control
                      placeholder="I WILL"
                      value={maintitle}
                      onChange={(e) => setMaintitle(e.target.value)}
                    ></Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">CATEGORY</Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control
                        as="select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option>Choose</option>
                        <option>Programming</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control
                        as="select"
                        value={category2}
                        onChange={(e) => setCategory2(e.target.value)}
                      >
                        <option>Advanced</option>
                        <option>Moderate</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">SERVICE TYPE</Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control
                        as="select"
                        value={services}
                        onChange={(e) => setServices(e.target.value)}
                      >
                        <option>Full Website Creation</option>
                        <option>Customization</option>
                        <option>Bug Fix</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col sm="3">GIG METADATA</Col>
                  <Col sm="9" className="bnm">
                    <div className="tworowbar">
                      <Row>
                        <Col className="borderonerow" sm="3">
                          PLATFORM
                        </Col>
                        <Col sm="9">
                          Select the platform for which you provide services*
                        </Col>
                      </Row>
                      <Row>
                        <Col className="borderonerow" sm="3"></Col>
                        <Col className="radiobtn">
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="JavaScript"
                                onChange={(e) => setMetadata(e.target.value)}
                              />
                              <label htmlFor="radio1">JavaScript</label>
                            </Col>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="React"
                                onChange={(e) => setMetadata(e.target.value)}
                              />
                              <label htmlFor="radio1">React</label>
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="NodeJs"
                                onChange={(e) => setMetadata(e.target.value)}
                              />
                              <label htmlFor="radio1">NodeJs</label>
                            </Col>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="Flutter"
                                onChange={(e) => setMetadata(e.target.value)}
                              />
                              <label htmlFor="radio1">Flutter</label>
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="Python"
                                onChange={(e) => setMetadata(e.target.value)}
                              />
                              <label htmlFor="radio1">Python</label>
                            </Col>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="Java"
                                onChange={(e) => setMetadata(e.target.value)}
                              />
                              <label htmlFor="radio1">Java</label>
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="ASP.NET"
                                onChange={(e) => setMetadata(e.target.value)}
                              />
                              <label htmlFor="radio1">ASP.NET</label>
                            </Col>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="HTML"
                                onChange={(e) => setMetadata(e.target.value)}
                              />
                              <label htmlFor="radio1">HTML</label>
                            </Col>
                          </Row>
                          <br></br>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">SEARCH TAGS</Col>
                  <Col className="bnm">
                    <Autocomplete
                      onChange={(event, value) => setTag(value)}
                      multiple
                      id="tags-filled"
                      options={top10.map((option) => option.title)}
                      freeSolo
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            variant="outlined"
                            label={option}
                            {...getTagProps({ index })}
                          />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          placeholder="Favorites"
                        />
                      )}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Row>
              <Col sm="1">
                <Button variant="success" type="cancel">
                  Cancel
                </Button>
              </Col>
              <Col sm="1">
                <Button type="submit" variant="success">
                  Save
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
