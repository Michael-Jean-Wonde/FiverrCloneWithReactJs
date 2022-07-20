import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Form, FormControl } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
const Slider = () => {
  return (
    <div className="slider">
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/BannerImages/greenBanner.jpg"
            alt="first slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/BannerImages/redBanner.jpg"
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/BannerImages/yellowBanner.jpg"
            alt="third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="hn">
        <p>
          Find the perfect <i>Services for your Business</i>
        </p>
        <Form inline>
          <img className="searchlogo" src="images/search-icon.png" alt="logo" />
          <FormControl
            type="text"
            placeholder="try 'building mobile app'"
            className="mr-lg-0"
          />
          <button className="btnn">Search</button>
        </Form>
        <div className="popular">
          Popular:
          <Chip
            className="chip"
            variant="outlined"
            size="small"
            label="React"
            component="a"
            href="#chip"
            clickable
          />
          <Chip
            className="chip"
            variant="outlined"
            size="small"
            label="Web"
            component="a"
            href="#chip"
            clickable
          />
          <Chip
            className="chip"
            variant="outlined"
            size="small"
            label="NodeJs"
            component="a"
            href="#chip"
            clickable
          />
          <Chip
            className="chip"
            variant="outlined"
            size="small"
            label="Flutter"
            component="a"
            href="#chip"
            clickable
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
