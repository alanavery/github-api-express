let express = require('express');
let app = express();
let axios = require('axios');

let PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  axios.get('https://api.github.com/users/delayedaa')
    .then(response => {
      let alanObject = {
        login: response.data.login,
        url: response.data.html_url,
        name: response.data.name
      };
      console.log(alanObject);
      res.send(alanObject);
    });
});

app.get('/nitish', (req, res) => {
  axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
      let nitishObject = {
        login: response.data.login,
        url: response.data.html_url,
        name: response.data.name
      };
      console.log(nitishObject);
      res.send(nitishObject);
    });
});

app.get('/carolina', (req, res) => {
  axios.get('https://api.github.com/users/canourrea23')
    .then(response => {
      let carolinaObject = {
        login: response.data.login,
        url: response.data.html_url,
        name: response.data.name
      };
      console.log(carolinaObject);
      res.send(carolinaObject);
    });
});

app.get('/tyler', (req, res) => {
  axios.get('https://api.github.com/users/tylerdance')
    .then(response => {
      let tylerObject = {
        login: response.data.login,
        url: response.data.html_url,
        name: response.data.name
      };
      console.log(tylerObject);
      res.send(tylerObject);
    });
});

app.get('/alex', (req, res) => {
  axios.get('https://api.github.com/users/AlexJBustillos')
    .then(response => {
      let alexObject = {
        login: response.data.login,
        url: response.data.html_url,
        name: response.data.name
      };
      console.log(alexObject);
      res.send(alexObject);
    });
});

app.get('/dexter', (req, res) => {
  axios.get('https://api.github.com/users/dextermichael')
    .then(response => {
      let dexterObject = {
        login: response.data.login,
        url: response.data.html_url,
        name: response.data.name
      };
      console.log(dexterObject);
      res.send(dexterObject);
    });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on PORT ${PORT}.`);
});