const express = require('express');
const bodyParser = require('body-parser');
const { join } = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(join(__dirname, '../src')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../view/index.html'));
});

app.listen(port, () => {
  console.log('Server listening on port:', port)
})