// const mongoose = require("mongoose");
import mongoose from "mongoose";

let conn = null;

const connectToDatabase = async () => {
  if (conn) return conn;
  conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return conn;
};
export default connectToDatabase;
// module.exports = connectToDatabase;
