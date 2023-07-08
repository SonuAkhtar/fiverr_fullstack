import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: true,
    },
    image: {
      type: string,
      required: false,
    },

    country: {
      type: string,
      required: true,
    },
    phone: {
      type: string,
      required: true,
    },
    desc: {
      type: string,
      required: false,
    },
    isSeller: {
      type: boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("conversation", conversationSchema);
