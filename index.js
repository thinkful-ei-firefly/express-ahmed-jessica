'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.end(`the sum of a and b is ${a+b}`);
});

app.get('/cipher', (req, res) => {
  let text = req.query.text;
  const shift = parseInt(req.query.shift);
  let code = [];

  for (let i=0; i<text.length; i++) {
    if (text[i] !== ' ') {
      let letterCode = text.charCodeAt(i);
      let codedLetter = String.fromCharCode(letterCode+shift);
      code[i] = codedLetter;
    } else {
      code[i] = ' ';
    }
  }
  code = code.join('');
  res.end(`${code}`);
});


app.listen(8000, () =>{
  console.log('Express server listening on port 8000!');
});