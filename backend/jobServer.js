import { createServer } from 'http';
import url from 'url';
import axios from 'axios';
import chalk from 'chalk';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
};

const APP_ID = '575cabf6';
const API_KEY = '3e7bef91075d62ba093dbe0a486293af';
const BASE_URL = 'https://api.adzuna.com/v1/api/jobs';
const BASE_PARAMS = 'search/1?&results_per_page=20&content-type=application/json';

const server = createServer((req, res) => {
  const requestURL = url.parse(req.url);
  const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
  const { search, location, country = 'gb' }  = decodedParams;

  const targetURL = `${BASE_URL}/${country.toLowerCase()}/${BASE_PARAMS}&app_id=${APP_ID}&app_key=${API_KEY}&what=${search}&where=${location}`;
    if (req.method === 'GET') {
      console.log(chalk.green(`Proxy GET request to : ${targetURL}`));
      axios.get(targetURL)
        .then(response => {
          res.writeHead(200, headers);
          res.end(JSON.stringify(response.data));
        })
        .catch(response => {
          console.log(chalk.red(response));
          res.writeHead(500, headers);
          res.end(JSON.stringify(response));
        });
    } 
});


server.listen(3002, () => {
  console.log(chalk.green('Server listening'));
} );


const decodeParams = searchParams => Array
  .from(searchParams.keys())
  .reduce((acc, key) => ({ ...acc, [key]: searchParams.get(key) }), {});