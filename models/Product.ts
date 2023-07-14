import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    image: Buffer,
    name: String,
    category: Number,
  },
  {
    timestamps: true,
  }
);
