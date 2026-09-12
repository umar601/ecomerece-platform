const {
  addProduct,
  getAllProducts,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const productRouter = require("express").Router();
const upload = require("../middlewares/upload.middleware");

//product routes for making a product and uploading the image to cloudinary
productRouter
  .post("/", upload.array("images", 5), authMiddleware, addProduct)
  .get("/", getAllProducts)
  .patch("/:productId", upload.array("images", 5),authMiddleware, editProduct)
  .delete("/:productId",authMiddleware,deleteProduct)

module.exports = productRouter;
