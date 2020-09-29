exports.isAuth = (req, res, next) => {
  if (req.user) {
    req.userId = req.user._id;
  } else {
    req.userId = 0;
    res.send("User not Authorized");
  }
  next();
};
