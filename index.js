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

app.get('/lotto', (req, res) => {
  let numbers = req.query.arr;
  numbers = numbers.map(val => parseInt(val));
  console.log(numbers);
  const winningNums =[];
  while (winningNums.length<6) {
    const newNum = Math.ceil(Math.random()*20);
    if (!winningNums.includes(newNum)) {
      winningNums.push(newNum);
    }
  }
  console.log(winningNums);

  let score = 0;
  for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
    console.log(winningNums.includes(numbers[i]));
    if (winningNums.includes(numbers[i])) {
      score+=1;
    }
  }
  console.log(score);

  let response;

  switch (score) {
  case 4:
    response = 'Congratulations, you win a free ticket!';
    break;
  case 5:
    response = 'Congratulations! You win $100!';
    break;
  case 6:
    response = 'Wow! Unbelieveable! You could have won the mega millions!';
    break;
  default:
    response = 'Sorry, you lose.';
    break;    
  }

  res.end(response);
});


app.listen(8000, () =>{
  console.log('Express server listening on port 8000!');
});