const router = require("express").Router();
const SkuController = require("./../controllers/skuController");

router.get("/add", SkuController.getAdd);
router.post("/add", SkuController.postAdd);

module.exports = router;
