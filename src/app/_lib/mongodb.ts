import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error("Please define the MONGODB_URI environment variable");

interface CachedMongoose {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

type GlobalWithMongoose = typeof globalThis & { mongoose?: CachedMongoose };
const globalWithMongoose = globalThis as GlobalWithMongoose;
const cached: CachedMongoose = globalWithMongoose.mongoose ?? (globalWithMongoose.mongoose = { conn: null, promise: null });

export async function dbConnect(): Promise<Connection> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then(m => m.connection);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
