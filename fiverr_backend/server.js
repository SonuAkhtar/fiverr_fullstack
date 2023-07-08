//libraries
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//routes
import authRoute from "./routes/auth.route.js";
// import conversationRoute from "./routes/conversation.route.js";
// import gigRoute from "./routes/gig.route.js";
// import messageRoute from "./routes/message.route.js";
// import orderRoute from "./routes/order.route.js";
// import reviewRoute from "./routes/review.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());

// use routes
app.use("/api/auth", authRoute);
// app.use("/api/conversation", conversationRoute);
// app.use("/api/gig", gigRoute);
// app.use("/api/message", messageRoute);
// app.use("/api/order", orderRoute);
// app.use("/api/reivew", reviewRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
  connect();
  console.log("backend");
});
