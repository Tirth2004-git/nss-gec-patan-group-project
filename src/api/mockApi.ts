// Mock API service for development
const mockReports = [
  {
    _id: '1',
    title: 'Annual Report 2023-24',
    report_type: 'Annual',
    academic_year: '2023-24',
    total_activities: 25,
    total_volunteers: 150,
    total_hours: 1200,
    summary: 'Comprehensive annual report covering all NSS activities',
    file_url: '',
    created_at: new Date(),
    updated_at: new Date()
  }
]

const mockActivities = [
  {
    _id: '1',
    title: 'Tree Plantation Drive',
    description: 'Community tree plantation initiative',
    activity_date: new Date('2024-01-15'),
    location: 'GEC Patan Campus',
    participants_count: 50,
    hours: 4,
    category: 'Environmental',
    status: 'Completed',
    created_at: new Date(),
    updated_at: new Date()
  }
]

// Mock API functions
export async function getReports() {
  return new Promise(resolve => {
    setTimeout(() => resolve([...mockReports]), 500)
  })
}

export async function getReport(id: string) {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockReports.find(r => r._id === id)), 500)
  })
}

export async function createReport(reportData: any) {
  return new Promise(resolve => {
    setTimeout(() => {
      const newReport = {
        ...reportData,
        _id: Date.now().toString(),
        created_at: new Date(),
        updated_at: new Date()
      }
      mockReports.push(newReport)
      resolve(newReport)
    }, 500)
  })
}

export async function updateReport(id: string, reportData: any) {
  return new Promise(resolve => {
    setTimeout(() => {
      const index = mockReports.findIndex(r => r._id === id)
      if (index !== -1) {
        mockReports[index] = { ...mockReports[index], ...reportData, updated_at: new Date() }
      }
      resolve({ modifiedCount: 1 })
    }, 500)
  })
}

export async function deleteReport(id: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      const index = mockReports.findIndex(r => r._id === id)
      if (index !== -1) {
        mockReports.splice(index, 1)
      }
      resolve({ deletedCount: 1 })
    }, 500)
  })
}

export async function getActivities() {
  return new Promise(resolve => {
    setTimeout(() => resolve([...mockActivities]), 500)
  })
}

export async function getActivity(id: string) {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockActivities.find(a => a._id === id)), 500)
  })
}

export async function createActivity(activityData: any) {
  return new Promise(resolve => {
    setTimeout(() => {
      const newActivity = {
        ...activityData,
        _id: Date.now().toString(),
        created_at: new Date(),
        updated_at: new Date()
      }
      mockActivities.push(newActivity)
      resolve(newActivity)
    }, 500)
  })
}

export async function updateActivity(id: string, activityData: any) {
  return new Promise(resolve => {
    setTimeout(() => {
      const index = mockActivities.findIndex(a => a._id === id)
      if (index !== -1) {
        mockActivities[index] = { ...mockActivities[index], ...activityData, updated_at: new Date() }
      }
      resolve({ modifiedCount: 1 })
    }, 500)
  })
}

export async function deleteActivity(id: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      const index = mockActivities.findIndex(a => a._id === id)
      if (index !== -1) {
        mockActivities.splice(index, 1)
      }
      resolve({ deletedCount: 1 })
    }, 500)
  })
}