// import libraries
const express = require('express');
const fs = require('fs');

// create our app
const app = express();

// set headers
app.use((req, res, next) => {
  // only allow GET requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

// create routes
app.get('/professional', (req, res, next) => {
  // read img
  const imageFile = fs.readFileSync('./base64Img.json');
  const imageJson = JSON.parse(imageFile);
  res.status(200).json({
    professionalName: 'Tyler Shellman',
    nameLink: {
      firstName: 'Tyler',
      url: '#',
    },
    primaryDescription: 'Software Engineering Student at BYU-Idaho',
    workDescription1:
      'Digital Content Publisher for University Relations at BYU-Idaho.',
    workDescription2: 'Java Developer for BYU-Idaho Support Center.',
    linkTitleText: 'Connect With Me!',
    linkedInLink: {
      link: 'https://www.linkedin.com/in/tylershellman/',
      text: 'LinkedIn',
    },
    githubLink: {
      link: 'https://github.com/Tyler242',
      text: 'GitHub',
    },
    base64Image: imageJson.image.data,
  });
});

// listen for requests
app.listen(8080);
console.log('Listening on 8080');
