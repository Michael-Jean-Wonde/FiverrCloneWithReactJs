import React from "react";
import { Container } from "react-bootstrap";


const SearchJobs = () => {
  return (
    <Container>
  <header>
    <div class="container">
      <h1>Job Search App</h1>
      <h2>Find your perfect job today!</h2>
      <form id="search-form">
          <input type="text" class="form-control" placeholder="Job Title" id="search" />
          <input type="text" class="form-control" placeholder="Location" id="location" />
          <button class="btn btn-block btn-primary">Search</button>
        </form>
    </div>
  </header>
  <main>
    <div class="container">
          <div class="loading-element">
            <img src="/loading.svg" alt="" />
          </div>
          <div class="result-container"></div>        
    </div>
  </main>
  <script src="/searchJobLaunch.js"></script>
</Container>
  );
};

export default SearchJobs;
