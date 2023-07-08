import mongoose from "mongoose";
const { Schema } = mongoose;

const gigSchema = new Schema(
  {
    userId: {
      type: string,
      required: true,
    },
    title: {
      type: string,
      required: true,
    },
    desc: {
      type: string,
      required: true,
    },

    totalStars: {
      type: number,
      default: 0,
    },
    startNumber: {
      type: number,
      default: 0,
    },
    category: {
      type: string,
      required: true,
    },
    price: {
      type: number,
      required: true,
    },
    coverImage: {
      type: string,
      required: true,
    },
    images: {
      type: [string],
      required: false,
    },

    shortTitle: {
      type: string,
      required: true,
    },
    shortDesc: {
      type: string,
      required: true,
    },
    deliveryTime: {
      type: number,
      required: true,
    },
    revisionNumber: {
      type: number,
      required: true,
    },
    features: {
      type: [string],
      required: false,
    },
    sales: {
      type: number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gig", gigSchema);
