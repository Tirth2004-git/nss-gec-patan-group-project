import bcrypt from 'bcryptjs'
import { connectDB } from './database'
import { ObjectId } from 'mongodb'

export interface User {
  _id?: ObjectId
  email: string
  full_name: string
  role: string
  password_hash: string
  created_at: Date
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const db = await connectDB()
  const user = await db.collection<User>('users').findOne({ email })
  return user
}

export async function getUserWithPassword(email: string) {
  const db = await connectDB()
  const user = await db.collection<User>('users').findOne({ email })
  return user
}

export async function createUser(email: string, password: string, fullName: string, role = "admin"): Promise<User> {
  const passwordHash = await hashPassword(password)
  const db = await connectDB()
  
  const user: Omit<User, '_id'> = {
    email,
    password_hash: passwordHash,
    full_name: fullName,
    role,
    created_at: new Date()
  }
  
  const result = await db.collection<User>('users').insertOne(user)
  return { ...user, _id: result.insertedId }
}