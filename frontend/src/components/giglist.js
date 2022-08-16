import React, { useState, useEffect } from "react";
import "./giglist.css";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const Gigslist = () => {
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
    <div>
      {gigs.map((g) => (
          <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={g.image} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{g.title}</h5>
              <p class="card-text">
                {g.description}
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Gigslist;
