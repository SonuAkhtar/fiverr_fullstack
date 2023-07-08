import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    gigId: {
      type: String,
      default: true,
    },
    userId: {
      type: String,
      default: true,
    },
    star: {
      type: Number,
      default: true,
      enum: [1, 2, 3, 4, 5],
    },
    desc: {
      type: String,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("review", reviewSchema);
