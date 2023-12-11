const router = require("express").Router();
const bannerRoutes = require("./bannerRoutes");

router.use("/banner", bannerRoutes);

module.exports = router;
