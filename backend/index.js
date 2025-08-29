import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import cors from "cors";
import userRoute from "./route/user.route.js";


const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI)
  .then(() => {
    console.log(" Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })

  
  .catch((error) => {
    console.error(" MongoDB connection error:", error);
  });


  app.use("/book",bookRoute);
  app.use("/user",userRoute);
