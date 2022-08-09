import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Form, FormControl } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import SigninForm from "./signin.js";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0px white",
    display: "flex",
    width: "30%",
    height: "45%",
    padding: "15px",
    alignItems: "left",
    boxShadow: theme.spacing(2, 4, 3),
  },
}));

const Slider = () => {
  const classes = useStyles();
  const [open, setopen] = React.useState();
  const handleOpen = () => {
    console.log("opened");
    setopen(true);
    console.log("opens");
  };
  const handleClose = () => {
    setopen(false);
  };

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
            src="images/SWdeveloper.jpg"
            alt="third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="hn">
        <p>
          Find the perfect <i>Services for your Business</i>
        </p>
        <button className="videoBanner__info--first" onClick={handleOpen}>
          Hire a Freelancer
        </button>
        <button className="videoBanner__info--second" onClick={handleOpen}>
          Earn Money Freelancing
        </button>
        {/* <Form inline>
          <img className="searchlogo" src="images/search-icon.png" alt="logo" />
          <FormControl
            type="text"
            placeholder="try 'building mobile app'"
            className="mr-lg-0"
          />
          <button className="btnn">Search</button>
        </Form> */}
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <SigninForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Slider;
