const app = require('./app');
const port = 3333;

app.listen(port, (req, res) => {
  console.log(`server running ${port}`);
});