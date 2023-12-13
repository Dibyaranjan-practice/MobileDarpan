const express = require("express");
require("ejs");
require("dotenv").config();
require("./utils/db");
const multer = require("multer");
const crypto = require("crypto");

const bannerRoutes = require("./routes/bannerRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/assets/images");
    },
    filename: (req, file, cb) => {
      cb(null, crypto.randomUUID() + file.originalname);
    },
  }),
});

app.use("/api", apiRoutes);
app.use("/banner", upload.single("bannerUrl"), bannerRoutes);

app.listen(5000, () => {
  console.log("Server running on 5000");
});
