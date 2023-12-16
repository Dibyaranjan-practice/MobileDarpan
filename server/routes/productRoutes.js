const router = require("express").Router();
const MainProductController = require("./../controllers/MainProductController");

router.get("/add", MainProductController.getAddMainProduct);
router.post("/add", MainProductController.postAddMainProduct);
router.get("/findall", MainProductController.getFindAll);
router.get("/category/:type", MainProductController.getFindByCategory);
router.get("/:id", MainProductController.getFindById);

module.exports = router;
