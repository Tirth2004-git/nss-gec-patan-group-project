import { connectDB } from '../../lib/database'
import { ObjectId } from 'mongodb'

export interface Report {
  _id?: ObjectId
  title: string
  report_type: string
  academic_year: string
  total_activities: number
  total_volunteers: number
  total_hours: number
  summary: string
  file_url?: string
  created_at: Date
  updated_at: Date
}

// Get all reports
export async function getReports() {
  try {
    const db = await connectDB()
    const reports = await db.collection('reports')
      .find()
      .sort({ academic_year: -1, created_at: -1 })
      .toArray()
    return reports
  } catch (error) {
    console.error('Failed to fetch reports:', error)
    throw error
  }
}

// Get single report
export async function getReport(id: string) {
  try {
    const db = await connectDB()
    const report = await db.collection('reports')
      .findOne({ _id: new ObjectId(id) })
    return report
  } catch (error) {
    console.error('Failed to fetch report:', error)
    throw error
  }
}

// Create report
export async function createReport(reportData: Omit<Report, '_id' | 'created_at' | 'updated_at'>) {
  try {
    const db = await connectDB()
    const report: Omit<Report, '_id'> = {
      ...reportData,
      created_at: new Date(),
      updated_at: new Date()
    }
    
    const result = await db.collection('reports').insertOne(report)
    return { ...report, _id: result.insertedId }
  } catch (error) {
    console.error('Failed to create report:', error)
    throw error
  }
}

// Update report
export async function updateReport(id: string, reportData: Partial<Report>) {
  try {
    const db = await connectDB()
    const result = await db.collection('reports').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...reportData, 
          updated_at: new Date() 
        } 
      }
    )
    return result
  } catch (error) {
    console.error('Failed to update report:', error)
    throw error
  }
}

// Delete report
export async function deleteReport(id: string) {
  try {
    const db = await connectDB()
    const result = await db.collection('reports').deleteOne({ _id: new ObjectId(id) })
    return result
  } catch (error) {
    console.error('Failed to delete report:', error)
    throw error
  }
}