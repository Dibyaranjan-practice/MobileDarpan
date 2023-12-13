const router = require("express").Router();
const MainProductController = require("./../controllers/MainProductController");

router.get("/add", MainProductController.getAddMainProduct);
router.post("/add", MainProductController.postAddMainProduct);

module.exports = router;
