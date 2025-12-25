import { connectDB } from '../../lib/database'
import { ObjectId } from 'mongodb'

export interface Activity {
  _id?: ObjectId
  title: string
  description: string
  activity_date: Date
  location: string
  participants_count: number
  hours: number
  category: string
  status: string
  created_at: Date
  updated_at: Date
}

// Get all activities
export async function getActivities() {
  try {
    const db = await connectDB()
    const activities = await db.collection('activities')
      .find()
      .sort({ activity_date: -1 })
      .toArray()
    return activities
  } catch (error) {
    console.error('Failed to fetch activities:', error)
    throw error
  }
}

// Get single activity
export async function getActivity(id: string) {
  try {
    const db = await connectDB()
    const activity = await db.collection('activities')
      .findOne({ _id: new ObjectId(id) })
    return activity
  } catch (error) {
    console.error('Failed to fetch activity:', error)
    throw error
  }
}

// Create activity
export async function createActivity(activityData: Omit<Activity, '_id' | 'created_at' | 'updated_at'>) {
  try {
    const db = await connectDB()
    const activity: Omit<Activity, '_id'> = {
      ...activityData,
      created_at: new Date(),
      updated_at: new Date()
    }
    
    const result = await db.collection('activities').insertOne(activity)
    return { ...activity, _id: result.insertedId }
  } catch (error) {
    console.error('Failed to create activity:', error)
    throw error
  }
}

// Update activity
export async function updateActivity(id: string, activityData: Partial<Activity>) {
  try {
    const db = await connectDB()
    const result = await db.collection('activities').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...activityData, 
          updated_at: new Date() 
        } 
      }
    )
    return result
  } catch (error) {
    console.error('Failed to update activity:', error)
    throw error
  }
}

// Delete activity
export async function deleteActivity(id: string) {
  try {
    const db = await connectDB()
    const result = await db.collection('activities').deleteOne({ _id: new ObjectId(id) })
    return result
  } catch (error) {
    console.error('Failed to delete activity:', error)
    throw error
  }
}