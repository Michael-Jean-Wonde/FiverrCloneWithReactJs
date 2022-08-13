import React, { useState, useEffect } from "react";
import "./createGig2.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserHeader from "../components/userHeader";
import { createGigBackend } from "../action/productListAction";
import { Row, Col, Button, Form, Table, Container } from "react-bootstrap";

const CreateGig2 = () => {
  const [title1, setTitle1] = useState(" ");
  const [title2, setTitle2] = useState(" ");
  const [title3, setTitle3] = useState(" ");
  const [description1, setDescription1] = useState(" ");
  const [description2, setDescription2] = useState(" ");
  const [description3, setDescription3] = useState(" ");
  const [deliverytime1, setDeliverytime1] = useState(0);
  const [deliverytime2, setDeliverytime2] = useState(0);
  const [deliverytime3, setDeliverytime3] = useState(0);
  const [pages1, setPages1] = useState(0);
  const [pages2, setPages2] = useState(0);
  const [pages3, setPages3] = useState(0);
  const [products1, setProducts1] = useState(0);
  const [products2, setProducts2] = useState(0);
  const [products3, setProducts3] = useState(0);
  const [customization1, setCustomization1] = useState(false);
  const [customization2, setCustomization2] = useState(false);
  const [customization3, setCustomization3] = useState(false);
  const [responsive1, setResponsive1] = useState(false);
  const [responsive2, setResponsive2] = useState(false);
  const [responsive3, setResponsive3] = useState(false);
  const [contentupload1, setContentupload1] = useState(false);
  const [contentupload2, setContentupload2] = useState(false);
  const [contentupload3, setContentupload3] = useState(false);
  const [revision1, setRevision1] = useState(0);
  const [revision2, setRevision2] = useState(0);
  const [revision3, setRevision3] = useState(0);
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [price3, setPrice3] = useState(0);
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const creategigdata = useSelector((state) => state.creategigdata);
  const { gig } = creategigdata;
  const { title, category, category2, service, metadata, tag } = gig;

  return (
    <div>
      <UserHeader />
      <Container>
        <Form>
          <div className="gig2">
            <h3>Scope&Pricing</h3>
            <div className="gig2line"></div>
            <h5>Packages</h5>
            <Table bordered>
              <thead>
                <tr className="tblrw">
                  <th>Title</th>
                  <th>BASIC</th>
                  <th>STANDARD</th>
                  <th>PREMIUM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="3"></td>
                  <td>
                    <Form.Control as="textarea" rows={3} />
                  </td>

                  <td>
                    <Form.Control as="textarea" rows={3} />
                  </td>

                  <td>
                    <Form.Control as="textarea" rows={3} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control as="textarea" rows={3} />
                  </td>

                  <td>
                    <Form.Control as="textarea" rows={3} />
                  </td>

                  <td>
                    <Form.Control as="textarea" rows={3} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                </tr>
                <tr>
                  <td>Number of Pages</td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                </tr>
                <tr>
                  <td>Number of Products</td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                </tr>
                <tr className="hk1">
                  <td>Design Customization</td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox1" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox2" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox3" />
                  </td>
                </tr>
                <tr className="hk1">
                  <td>Responsive Design</td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox4" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox5" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox6" />
                  </td>
                </tr>
                <tr className="hk1">
                  <td>Content Upload</td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox7" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox8" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox9" />
                  </td>
                </tr>
                <tr>
                  <td>Revisions</td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                </tr>
                <tr className="hk1">
                  <td>Price</td>
                  <td>
                    <input type="number" step="5" max="10000" />$
                  </td>
                  <td>
                    <input type="number" step="5" max="10000" />$
                  </td>
                  <td>
                    <input type="number" step="5" max="10000" />$
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    <Form.Group controlId="image">
                      <Form.Control
                        type="text"
                        placeholder="dsa"
                      ></Form.Control>
                      <Form.Control type="file" />
                    </Form.Group>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </Table>
            <Row>
              <Col sm="1">
                <Button type="reset" variant="success">
                  Cancel
                </Button>
              </Col>
              <Col>
                <Button type="submit" variant="success">
                  Save
                </Button>
              </Col>
            </Row>
            <br></br>
            <br></br>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CreateGig2;
