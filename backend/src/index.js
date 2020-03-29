const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const route = require('./routes');
const app = express();
app.use(cors())
const port = 3333;

app.use(morgan('dev'));
app.use(express.json());
app.use(route);

app.listen(port, (req, res) => {
  console.log(`server running ${port}`);
});
