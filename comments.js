// Create web server and listen on port 3000

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = {
  '1': 'First comment!',
  '2': 'Second comment!',
  '3': 'Third comment!',
};

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.get('/comments/:id', (req, res) => {
  console.log(req.params.id + ': ' + comments[req.params.id]);
  res.send(comments[req.params.id]);
});

app.post('/comments', (req, res) => {
  const id = comments.length;
  comments[id] = req.body.comment;
  console.log('posted: ' + comments[id]);
  res.send(id.toString());
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server with the following command:
// node comments.js
