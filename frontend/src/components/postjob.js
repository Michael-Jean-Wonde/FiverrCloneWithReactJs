import React, {useState} from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import BuyerHeader from "../components/buyerHeader";
import axios from "axios";

const Postjob = () => {

  const [input, setInput] = useState({
    maintitle: '',
    category: '',
    category2: '',
    days: '',
    price: ''
  })


  function handleChange(event) {
    const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    const newJob = {
    maintitle: input.maintitle,
    category: input.category,
    category2: input.category2,
    days: input.days,
    price: input.price
    }
    axios.post("http://localhost:5000/postJob", newJob);
    console.log(newJob);
  }

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
              <div className="form-group">
                <h6>
                  Describe the services you are looking to purchase - please do
                  as detailed as possible:
                </h6>
                <textarea
                  name="maintitle"
                  className="form-control"
                  rows="5"
                  placeholder="I am looking for..."
                  value={input.maintitle}
                  onChange={handleChange}
                ></textarea>
              </div>
            </Col>
          </Row>
          <br />
          <h6>Choose a Category</h6>
          <Row>
            <Col sm="4">
              <select className="form-control" name="category" value={input.category} onChange={handleChange}>
                <option>Choose</option>
                <option>Programming</option>
                <option>Programming</option>
                <option>Programming</option>
              </select>
            </Col>
            <Col sm="4">
              <select className="form-control" name="category2" value={input.category2} onChange={handleChange}>
                <option>Advanced</option>
                <option>Moderate</option>
                <option>Advanced</option>
                <option>Moderate</option>
              </select>
            </Col>
          </Row>
          <br />
          <h6>
            Once you place your order, when would you like your service
            delivered?
          </h6>
          <Row>
            <Col>
              <input name="days" value={input.days} type="number" min="1" max="60" onChange={handleChange} />
            </Col>
          </Row>
          <br />
          <h6>What is your budget for this service?</h6>
          <Row>
            <Col sm="7">
              <input name="price" value={input.price} type="number" min="5" max="2000" onChange={handleChange} />$
            </Col>
            <Col sm="3">
              <Button type="submit" variant="success" onClick={handleClick}>
                Post
              </Button>
            </Col>
          </Row>
          <br />
        </Form>
      </Container>
    </div>
  );
};

export default Postjob;
