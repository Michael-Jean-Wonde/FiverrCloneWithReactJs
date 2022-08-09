import axios from "axios";
import { createServer } from "http";
import url from "url";
import chalk from "chalk";
// import configApi from './config'
// const axios = require('axios');
// const createServer = require('http').createServer;
// const url = require('url');
// const chalk = require('chalk');
// const configApi = require('../utills/configApi');

const APP_ID = '575cabf6';
const API_KEY = '3e7bef91075d62ba093dbe0a486293af';
const BASE_URL = 'https://api.adzuna.com/v1/api/jobs';
const BASE_PARAMS = 'search/1?&results_per_page=20&content-type=application/json';

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

const decodeParams = (searchParams) =>
  Array.from(searchParams.keys()).reduce(
    (acc, key) => ({ ...acc, [key]: searchParams.get(key) }),
    {}
  );

const server = createServer((req, res) => {
  const requestURL = url.parse(req.url);
  const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
  const { search, location, country = "gb" } = decodedParams;

  const targetURL = `${BASE_URL}/${country.toLowerCase()}/${
    BASE_PARAMS
  }&app_id=${APP_ID}&app_key=${
    API_KEY
  }&what=${search}&where=${location}`;

  if (req.method === "GET") {
    console.log(chalk.green(`Proxy GET request to : ${targetURL}`));
    axios
      .get(targetURL)
      .then((response) => {
        res.writeHead(200, headers);
        res.end(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(chalk.red(error));
        res.writeHead(500, headers);
        res.end(JSON.stringify(error));
      });
  }
});


server.listen(3001, () => {
    console.log(chalk.green('Server listening'));
})

// import { useReducer, useEffect } from "react";
// import axios from "axios";

// const ACTIONS = {
//   MAKE_REQUEST: "make-request",
//   GET_DATA: "get-data",
//   ERROR: "error",
// };

// const BASE_URL =
//   "https://cors-anywhere.herokuapp.com/http://api.juju.com/jobs";

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.MAKE_REQUEST:
//       return { loading: true, jobs: [] };
//     case ACTIONS.GET_DATA:
//       return { ...state, loading: false, jobs: action.payload.jobs };
//     case ACTIONS.ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//         jobs: [],
//       };
//     default:
//       return state;
//   }
// }

// export default function UseFetchJobs(params, page) {
//   const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

//   useEffect(() => {
//     dispatch({ type: ACTIONS.MAKE_REQUEST });
//     axios
//       .get(BASE_URL, {
//         params: { markdown: true, page, ...params },
//       })
//       .then((res) => {
//         console.log(res.data);
//         dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
//       })
//       .catch((e) => {
//         dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
//       });
//   }, [params, page]);

//   return state;
// }
