import express from "express";
import {
  createProductReview,
  getProductById,
  getTopTen,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc  Fetch all products
// @route  GET /api/products
// @access  Public

router.route("/").get(getTopTen);
router.route("/:id").get(getProductById);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
