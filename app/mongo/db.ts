import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/hono-db'

export async function dbconnect() {

  try {
    await mongoose.connect(MONGO_URL)
    console.log('✅ Connected to MongoDB via Mongoose')
    return mongoose.connection
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    throw error
  }
}