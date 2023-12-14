const Recruiter = require("../models/Recruiter");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = "Aura";
const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const generateOTP = require("./generateOTP");

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

  let token = await jwt.sign({ email }, key);
  
  const userId=newUser._id;

  return res.status(201).json({
    user: { type: "user", firstName, lastName, email ,userId},
    token,
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
  if (!email || !password) {
    return res.status(400).json({ err: "Field Can't be Empty" });
  }

  const userExists = await User.findOne({ email: email });
  if (userExists) {
    const verify = await bcrypt.compare(password, userExists.password);
    if (verify) {
      let token = await jwt.sign({ email: userExists.email }, key);
      return res.json({
        authToken: token,
        user: {
          type: "user",
          firstName: userExists.firstName,
          lastName: userExists.lastName,
          email: userExists.email,
          companyName: userExists.companyName,
        }
        // test:"test"
      });
    } else {
      return res.status(400).send({ err: "Invalid data" });
    }
  }

  const recruiterExists = await Recruiter.findOne({ email: email });
  if (recruiterExists) {
    const verify = await bcrypt.compare(password, recruiterExists.password);
    if (verify) {
      let token = await jwt.sign({ email: recruiterExists.email }, key);
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

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "587",
  secure: false,
  auth: {
    user: "aurahackfest@gmail.com",
    pass: "hocw ecta hgub kpzo",
  },
});

const sendOtp = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;

  const otp = generateOTP();
  globalotp=otp;
  
  var mailOptions = {
    from: "aurahackfest@gmail.com",
    to: email,
    subject: "OTP form Callback Coding",
    text: `Your OTP is: ${otp}`,
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
    } else {
      res.json({"otp":otp})
    }
  });
});



module.exports = { handleLogin, handleRecruiterSignUp, handleUserSignUp ,sendOtp };
