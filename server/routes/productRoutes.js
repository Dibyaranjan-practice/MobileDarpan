const router = require("express").Router();
const ProductController = require("./../controllers/productController");

router.get("/add", ProductController.getAddProduct);
router.post("/add", ProductController.postAddProduct);
router.get("/all", ProductController.getAll);
router.get("/category/:type", ProductController.getFindByCategory);
router.get("/:id", ProductController.getFindById);
router.get("/tag/:tag", ProductController.getFindByTag);

module.exports = router;
