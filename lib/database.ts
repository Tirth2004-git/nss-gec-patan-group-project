import { MongoClient, Db } from 'mongodb'

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const dbName = process.env.MONGODB_DB || 'nss_portal'

let client: MongoClient
let db: Db

export async function connectDB() {
  if (!client) {
    client = new MongoClient(uri)
    await client.connect()
    db = client.db(dbName)
    console.log('Connected to MongoDB')
  }
  return db
}

export { db }