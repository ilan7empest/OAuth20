require("dotenv").config();
const config = {
  production: {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
    COOKIE_SESSION_SECRET: process.env.COOKIE_SESSION_SECRET,
  },
  development: {
    PORT: 8080,
    MONGO_URI: process.env.MONGO_URI,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
    COOKIE_SESSION_SECRET: process.env.COOKIE_SESSION_SECRET,
  },
};
getConfig = (env) => config[env] || config.development;
module.exports = getConfig;
