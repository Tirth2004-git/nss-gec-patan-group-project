const { MongoClient } = require('mongodb')
const bcrypt = require('bcryptjs')

async function seedAdmin() {
  const client = new MongoClient('mongodb://localhost:27017')
  
  try {
    await client.connect()
    const db = client.db('nss_portal')
    
    // Check if admin already exists
    const existingAdmin = await db.collection('users').findOne({ 
      email: 'admin123@gmail.com' 
    })
    
    if (existingAdmin) {
      console.log('Admin user already exists')
      return
    }
    
    // Create admin user
    const passwordHash = await bcrypt.hash('admin@123', 10)
    
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
  } finally {
    await client.close()
  }
}

seedAdmin()