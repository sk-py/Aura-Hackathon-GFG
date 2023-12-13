//Require statements
const express = require("express");
const cors = require("cors");
const dbConnect = require("./connection");

//Calling Database Connection Function
dbConnect();

//Initializing express instance
const app = express();

//Middlewares

app.use(cors);
app.use(express.urlencoded({ extended: true }));

//Using Routes
app.get("/", (req, res) => {
  res.json("Server working perfectly");
});

//Listening on specified PORT
const port = 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
});
