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



app.listen(8000, () =>{
  console.log('Express server listening on port 8000!');
});