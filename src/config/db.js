const mongoose = require("mongoose");
const getConfig = require("./config");
const config = getConfig(process.env.NODE_ENV);
const db = mongoose.connection;
const PORT = config.PORT || 8080;

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", () => console.error.bind(console, "connection error:"));
db.once("open", () => {
  const app = require("../app");
  app.listen(PORT);
  console.log("Connection established");
});
