import fetch from 'node-fetch';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

fetch(url)
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
  })
  .catch((error) => {
    console.error('error in execution', error);
  });
