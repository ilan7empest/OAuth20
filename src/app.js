const express = require("express");
const app = express();
require("../src/middleware/passport");
const passport = require("passport");
const cookieSession = require("cookie-session");
const getConfig = require("./config/config");
const config = getConfig(process.env.NODE_ENV);

const logger = require("morgan");
if (process.env.NODE_ENV !== "production") {
  app.use(logger("dev"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cookieSession({
    keys: [config.COOKIE_SESSION_SECRET],
    maxAge: 1000 * 60 * 60 * 24 * 30,
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("../src/routers/auth-router")(app);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.message = "Invalid Route";
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({ error: { message: error.message } });
});

module.exports = app;
