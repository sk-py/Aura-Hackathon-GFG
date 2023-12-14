const jwt = require("jsonwebtoken");
const key = "Aura";
const User = require("../Models/User");

const getUserFromToken = async (req, res, next) => {
  const token = req.header("auth-token");
  // console.log(token);

  const payload = jwt.decode(token, key);
  if (payload) {
    const user = await User.findOne({ email: payload.email });
    if (user) {
      const userId = user._id;
      req.body.userId = userId;
      // console.log(user);
      next();
    } else {
      return res.status(401).json({ message: "invalid token" });
    }
  } else {
    return res.status(401).json({ message: "invalid token" });
  }
};

module.exports = getUserFromToken;
