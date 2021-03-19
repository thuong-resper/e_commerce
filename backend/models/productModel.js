import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const promotionsSchema = mongoose.Schema({
  name: { type: String, required: true },
  detail: { type: String, required: true },
});

const colorsSchema = mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

// const sizeSchema = mongoose.Schema({
//   name: { type: String, required: true },
//   value: { type: String, required: true },
// });

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    // s: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    priceCompare: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    promotions: [promotionsSchema],
    colors: [colorsSchema],
    // size: [sizeSchema],
  },
  { timestamp: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

// {
//   _id: "3ed01036-e6bf-44fe-9af9-2a2d0b94bfbe",
//   name: "Beef - Baby, Liver",
//   image: "http://dummyimage.com/203x119.jpg/5fa2dd/ffffff",
//   description: "Drainage of Peritoneum, Open Approach",
//   brand: "Sandostatin LAR Depot",
//   category: "YER",
//   price: "$822.92",
//   sale: true,
//   priceCompare: "$95.09",
//   countInStock: 16,
//   rating: 3.8,
//   numReviews: 260,
//   promotions: {
//     _id: "5d6a605e-7277-4a7c-b2a9-01a84d1a681a",
//     item: "19Jv2HRF5ijfbyJRswk4vrm7qf7qkmtjaU",
//     detail: "Toxic effect of venom of bees, accidental, sequela",
//   },
//   colors: {
//     name: "Violet",
//     value: "#f094f9",
//   },
//   size: {
//     option: "M",
//   },
// },
