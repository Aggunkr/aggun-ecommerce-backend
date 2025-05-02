const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

// Sepete ürün ekle
router.post("/add", authMiddleware, cartController.addToCart);

// Sepeti getir
router.get("/", authMiddleware, cartController.getCart);

// Sepetten ürün çıkar
router.delete("/:productId", authMiddleware, cartController.removeFromCart);

module.exports = router;
