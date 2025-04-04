import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: number,
    },
    category: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
