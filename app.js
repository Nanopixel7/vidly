const mongoose = require("mongoose");
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const home = require("./routes/home");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("connected to MongoDB..."))
  .catch((err) => console.error(`Couldn't connect to MongoDB.`));

app.use(express.json());
app.use(logger);
app.use("/", home);
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);
app.use("/api/rentals", rentals);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}...`));