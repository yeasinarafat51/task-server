import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect( `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v58lgaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
      dbName: "MERN_STACK_TASK_MANAGEMENT",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database! : ${err}`);
    });
};

// MONGO_URI=mongodb://127.0.0.1:27017