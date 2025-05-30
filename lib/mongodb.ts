import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Maintain a cached connection in dev to prevent multiple connections on reloads
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Allow global var usage in TypeScript
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      tlsAllowInvalidCertificates: true, // Optional: avoid SSL errors on Vercel
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    tlsAllowInvalidCertificates: true,
  });
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  return client.db(); // optional: specify db name like client.db("hirehub")
}
