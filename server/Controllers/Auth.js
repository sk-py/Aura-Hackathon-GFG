const Recruiter = require("../models/Recruiter");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = "Aura";

const handleUserSignUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !email || !password || !lastName) {
    return res.status(400).json({ err: "field cannot be empty" });
  }
  const alreadyExist = await User.findOne({ email: email });
  if (alreadyExist) {
    return res
      .status(400)
      .json({ err: "A user with this email already exist" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  let token = jwt.sign({ email }, key);
  return res.status(201).json({
    user: { type: "user", firstName, lastName, email },
    authToken: token,
  });
};

const handleRecruiterSignUp = async (req, res) => {
  const { firstName, lastName, email, password, companyName } = req.body;
  if (!firstName || !email || !password || !lastName || !companyName) {
    return res.status(400).json({ err: "field cannot be empty" });
  }
  const alreadyExist = await Recruiter.findOne({ email: email });
  if (alreadyExist) {
    return res
      .status(400)
      .json({ err: "A Recruiter with this email already exist" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newRecruiter = await Recruiter.create({
    firstName,
    lastName,
    email,
    companyName,
    password: hashedPassword,
  });
  let token = jwt.sign({ email }, key);
  return res.status(201).json({
    user: { type: "recruiter", firstName, lastName, email, companyName },
    authToken: token,
  });
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({ err: "Field Can't be Empty" });
  }

  const userExists = await User.findOne({ email: email });
  if (userExists) {
    const verify = await bcrypt.compare(password, userExists.password);
    if (verify) {
      let token = jwt.sign({ email: userExists.email }, key);
      return res.json({
        user: {
          type: "user",
          firstName: userExists.firstName,
          lastName: userExists.lastName,
          email: userExists.email,
          companyName: userExists.companyName,
        },
        authToken: token,
      });
    } else {
      return res.status(400).send({ err: "Invalid data" });
    }
  }

  const recruiterExists = await Recruiter.findOne({ email: email });
  if (recruiterExists) {
    const verify = await bcrypt.compare(password, recruiterExists.password);
    if (verify) {
      let token = jwt.sign({ email: recruiterExists.email }, key);
      return res.json({
        user: {
          type: "recruiter",
          firstName: recruiterExists.firstName,
          lastName: recruiterExists.lastName,
          email: recruiterExists.email,
          companyName: recruiterExists.companyName,
        },
        authToken: token,
      });
    } else {
      return res.status(400).send({ err: "Invalid data" });
    }
  }

  return res.status(400).send({ err: "User Not Found" });
};

module.exports = { handleLogin, handleRecruiterSignUp, handleUserSignUp };
