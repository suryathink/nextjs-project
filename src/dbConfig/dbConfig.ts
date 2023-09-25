import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("Connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDb Connection error. Make Sure MongoDb is runnung " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went Wrong", error);
  }
}
