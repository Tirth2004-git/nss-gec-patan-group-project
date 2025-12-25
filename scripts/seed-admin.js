import { connectDB } from '../lib/database.ts'
import { hashPassword } from '../lib/auth.ts'

async function seedAdmin() {
  try {
    const db = await connectDB()
    
    // Check if admin already exists
    const existingAdmin = await db.collection('users').findOne({ 
      email: 'admin123@gmail.com' 
    })
    
    if (existingAdmin) {
      console.log('Admin user already exists')
      return
    }
    
    // Create admin user
    const passwordHash = await hashPassword('admin@123')
    
    await db.collection('users').insertOne({
      email: 'admin123@gmail.com',
      password_hash: passwordHash,
      full_name: 'Super Admin',
      role: 'admin',
      created_at: new Date()
    })
    
    console.log('Admin user created successfully')
    console.log('Email: admin123@gmail.com')
    console.log('Password: admin@123')
    
  } catch (error) {
    console.error('Error creating admin user:', error)
  }
  
  process.exit(0)
}

seedAdmin()