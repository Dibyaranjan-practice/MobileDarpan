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
const categoryRoutes = require("./routes/categoryRoutes");
const brandRoutes = require("./routes/brandRoutes");
const skuRoutes = require("./routes/skuRoutes");
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
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
app.use(
  "/banner",
  upload.fields([
    {
      name: "bannerUrl",
    },
    {
      name: "MobBannerUrl",
    },
  ]),
  bannerRoutes
);
app.use("/product", upload.single("imageUrl"), productRoutes);
app.use("/category", upload.single("imageUrl"), categoryRoutes);
app.use("/brand", brandRoutes);
app.use("/sku", upload.single("imageUrl"), skuRoutes);

app.listen(5000, () => {
  console.log("Server running on 5000");
});
