const router = require("express").Router();
const bannerRoutes = require("./bannerRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");

router.use("/banner", bannerRoutes);
router.use("/product", productRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
