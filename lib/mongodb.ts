import { MongoClient } from 'mongodb';

// MongoDB client instance
const client = new MongoClient(process.env.MONGODB_URI as string);

// Function to connect to the database
export async function connectToDatabase() {
  try {
    // Connect to MongoDB if not already connected
    await client.connect();
    const db = client.db(); // Default database (you can specify if needed)
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to database');
  }
}
