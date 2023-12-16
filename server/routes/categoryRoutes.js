const router = require("express").Router();
const categoryController = require("./../controllers/categoryController");

router.get("/add", categoryController.getAddCategory);
router.post("/add", categoryController.postAddCategory);
router.get("/findall", categoryController.getFindAll);

module.exports = router;
