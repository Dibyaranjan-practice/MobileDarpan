const router = require("express").Router();
const BrandController = require("./../controllers/brandController");

router.get("/add", BrandController.getAddBrand);
router.post("/add", BrandController.postAddBrand);
router.get("/all", BrandController.getAll);

module.exports = router;
