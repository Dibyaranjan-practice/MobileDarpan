const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("MONGO connection successful");
  })
  .catch((error) => {
    console.log("Mongo connection failed", error);
  });
