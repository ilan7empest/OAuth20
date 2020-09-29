const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/login",
    })
  );
  app.get("/logout", (req, res, next) => {
    req.session = null;
    req.logout();
    res.redirect("/");
  });
  app.get("/", (req, res, next) => {
    res.send(req.user);
  });
};
