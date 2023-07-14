import IProduct from "@/interfaces/ProductInterface";
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    image: {
      type: String,
      required: [true, "Image is required field"],
    },
    name: { type: String, required: [true, "Name is required field"] },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required field"],
    },
    price: { type: Number, required: [true, "Price is required field"] },
    description: {
      type: String,
      required: [true, "Description is required field"],
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
