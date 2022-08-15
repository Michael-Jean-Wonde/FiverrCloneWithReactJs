import { margin } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import UserHeader from "../components/userHeader";

const BuyerRequests = () => {
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
      <UserHeader />
      <br />
      <Container>
        <br />
        {jobs.map((j) => (
          <div class="card" style={{ margin: "5px", width: "80%" }}>
            <div class="card-header">{j.category2}</div>
            <div class="card-body">
              <h5 class="card-title">{j.category}</h5>
              <p class="card-text">{j.maintitle}</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default BuyerRequests;
