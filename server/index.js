//Require statements
const express = require("express");
const cors = require("cors");
const dbConnect = require("./connection");
const bodyParser = require("body-parser");
const authRoutes = require("./Routes/Auth");
const jobRoutes = require("./Routes/Jobs");
const projectRoutes = require("./Routes/Projects");
const freelanceRoutes = require("./Routes/Freelance");
const cookieParser = require("cookie-parser");
//Calling Database Connection Function
dbConnect();

//Initializing express instance
const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


//Using Routes
app.get("/", (req, res) => {
  res.json("Server working perfectly");
});

//Authentication Router
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/projects",projectRoutes)

//Listening on specified PORT
const port = 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
});
