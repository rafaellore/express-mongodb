import mongoose from "mongoose";

async function dbConnect() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.ghyc7.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
}

export default dbConnect;
