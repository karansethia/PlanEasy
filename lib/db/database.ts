import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI;

let cached = (global as any).mongoose || {conn: null, promise: null};

export const connectDb = async () => {
  if (cached.conn) return cached.connect;
  if (!mongoUri) throw new Error("Mongodb uri is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(mongoUri, {
      dbName: "planeasy",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
