// Mock auth service for development
const mockUsers = [
  {
    _id: '1',
    email: 'admin123@gmail.com',
    password_hash: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // admin@123
    full_name: 'Super Admin',
    role: 'admin',
    created_at: new Date()
  }
]

export async function getUserWithPassword(email: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.email === email)
      resolve(user || null)
    }, 500)
  })
}

export async function verifyPassword(password: string, hashedPassword: string) {
  // Simple mock verification - in real app use bcrypt
  return new Promise(resolve => {
    setTimeout(() => {
      // For demo purposes, just check if password is 'admin@123'
      resolve(password === 'admin@123')
    }, 300)
  })
}