const jwt = require("jsonwebtoken");
const user = require("../Model/usersModel");
const verifyToken = (req, res) => {
  const token = req.headers.token;
  console.log(token, "token");
  if (!token) return res.status(401).send( "You are not Authenticated");
  jwt.verify(token, process.env.JWT_SECRETKEY, (err, user) => {
    if (err)
    return res.status(401).send( "Invalid Token! or Token is expired");
    req.user = user;
  // console.log(user,"dfgf")
   
  });
};
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next);
  console.log(req.user, "heyu");
  if (req.user.admin) {
    console.log(req.user.admin);
    next();
  } else {
    return res.status(401).send( "You are not authorized!");
  }
};
const verifyUser = (req, res, next) => {
  verifyToken(req, res);
  // console.log(req.user, "heyu");
  if (req.user._id === req.params.id || req.user.role === "admin") {
    next();
  } else {
    return res.status(401).send("You are not authorized!") 
  }
};

module.exports = {
  verifyAdmin,
  verifyUser,
  verifyToken,
};