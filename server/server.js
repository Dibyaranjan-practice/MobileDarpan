const express = require("express");
const path = require("path");
const cors = require("cors");
require("ejs");
require("dotenv").config();
require("./utils/db");
const multer = require("multer");
const crypto = require("crypto");

const apiRoutes = require("./routes/apiRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.static(path.join(__dirname, "public")));
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
app.use("/product", upload.single("imageUrl"), productRoutes);

app.listen(5000, () => {
  console.log("Server running on 5000");
});
