const jwt = require("jsonwebtoken");
const key = "Aura";
const User = require("../Models/User");

const getUserFromToken = async (req, res, next) => {
  const token = req.header("auth-token");

  if (token == undefined) {
    const { bodytoken } = req.body;
    console.log("bodytoken", bodytoken);
    const payload = jwt.decode(bodytoken, key);
    if (payload) {
      const user = await User.findOne({ email: payload.email });
      if (user) {
        const userId = user._id.toString();
        req.body.userId = userId;

        const userName =
          (await user.firstName.toString()) + " " + user.lastName.toString();
        req.body.userName = userName;
        next();
      } else {
        return res.status(404).json({ message: "invalid token" });
      }
    } else {
      return res.status(401).json({ message: "invalid auth_token" });
    }
    console.log(bodytoken);
  }

  const payload = jwt.decode(token, key);
  if (payload) {
    const user = await User.findOne({ email: payload.email });
    if (user) {
      const userId = user._id.toString();
      req.body.userId = userId;
      const userName =
        user.firstName.toString() + " " + user.lastName.toString();
      // req.body.userId = userId;
      req.body.userName = userName;
      // console.log(userName);

      // console.log(user);
      next();
    } else {
      return res.status(404).json({ message: "invalid token" });
    }
  } else {
    return res.status(401).json({ message: "invalid token" });
  }
};

module.exports = getUserFromToken;
