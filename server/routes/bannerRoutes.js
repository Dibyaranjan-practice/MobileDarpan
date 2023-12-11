const router = require("express").Router();
const bannerController = require("./../controllers/bannerController");

router.get("/add", bannerController.getAddBanner);
router.post("/add", bannerController.postAddBanner);
router.get("/findall", bannerController.getFindAllBanners);

module.exports = router;
