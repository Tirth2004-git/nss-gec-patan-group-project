import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Users, Calendar, Award, Clock, Plus, Edit, Trash2, LogOut } from 'lucide-react'
import { toast } from 'sonner'
import { getReports, createReport, updateReport, deleteReport } from '../../api/mockApi'
import { getActivities, createActivity, updateActivity, deleteActivity } from '../../api/mockApi'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState<any>(null)
  const [reports, setReports] = useState<any[]>([])
  const [activities, setActivities] = useState<any[]>([])
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false)
  const [isActivityDialogOpen, setIsActivityDialogOpen] = useState(false)
  const [editingReport, setEditingReport] = useState<any | null>(null)
  const [editingActivity, setEditingActivity] = useState<any | null>(null)

  const [reportForm, setReportForm] = useState({
    title: '',
    report_type: 'Annual',
    academic_year: '',
    total_activities: 0,
    total_volunteers: 0,
    total_hours: 0,
    summary: '',
    file_url: ''
  })

  const [activityForm, setActivityForm] = useState({
    title: '',
    description: '',
    activity_date: '',
    location: '',
    participants_count: 0,
    hours: 0,
    category: 'Community Service',
    status: 'Completed'
  })

  useEffect(() => {
    const adminUser = localStorage.getItem('admin_user')
    if (!adminUser) {
      navigate('/admin/login')
      return
    }
    setUser(JSON.parse(adminUser))
    loadData()
  }, [navigate])

  const loadData = async () => {
    try {
      const [reportsData, activitiesData] = await Promise.all([
        getReports(),
        getActivities()
      ])
      setReports(reportsData)
      setActivities(activitiesData)
    } catch (error) {
      toast.error('Failed to load data')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_user')
    toast.success('Logged out successfully')
    navigate('/admin/login')
  }

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingReport) {
        await updateReport(editingReport._id.toString(), reportForm)
        toast.success('Report updated successfully')
      } else {
        await createReport(reportForm)
        toast.success('Report created successfully')
      }
      setIsReportDialogOpen(false)
      setEditingReport(null)
      resetReportForm()
      loadData()
    } catch (error) {
      toast.error('Failed to save report')
    }
  }

  const handleActivitySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const activityData = {
        ...activityForm,
        activity_date: new Date(activityForm.activity_date)
      }
      
      if (editingActivity) {
        await updateActivity(editingActivity._id.toString(), activityData)
        toast.success('Activity updated successfully')
      } else {
        await createActivity(activityData)
        toast.success('Activity created successfully')
      }
      setIsActivityDialogOpen(false)
      setEditingActivity(null)
      resetActivityForm()
      loadData()
    } catch (error) {
      toast.error('Failed to save activity')
    }
  }

  const handleDeleteReport = async (id: string) => {
    if (confirm('Are you sure you want to delete this report?')) {
      try {
        await deleteReport(id)
        toast.success('Report deleted successfully')
        loadData()
      } catch (error) {
        toast.error('Failed to delete report')
      }
    }
  }

  const handleDeleteActivity = async (id: string) => {
    if (confirm('Are you sure you want to delete this activity?')) {
      try {
        await deleteActivity(id)
        toast.success('Activity deleted successfully')
        loadData()
      } catch (error) {
        toast.error('Failed to delete activity')
      }
    }
  }

  const resetReportForm = () => {
    setReportForm({
      title: '',
      report_type: 'Annual',
      academic_year: '',
      total_activities: 0,
      total_volunteers: 0,
      total_hours: 0,
      summary: '',
      file_url: ''
    })
  }

  const resetActivityForm = () => {
    setActivityForm({
      title: '',
      description: '',
      activity_date: '',
      location: '',
      participants_count: 0,
      hours: 0,
      category: 'Community Service',
      status: 'Completed'
    })
  }

  const editReport = (report: any) => {
    setEditingReport(report)
    setReportForm({
      title: report.title,
      report_type: report.report_type,
      academic_year: report.academic_year,
      total_activities: report.total_activities,
      total_volunteers: report.total_volunteers,
      total_hours: report.total_hours,
      summary: report.summary,
      file_url: report.file_url || ''
    })
    setIsReportDialogOpen(true)
  }

  const editActivity = (activity: any) => {
    setEditingActivity(activity)
    setActivityForm({
      title: activity.title,
      description: activity.description,
      activity_date: new Date(activity.activity_date).toISOString().split('T')[0],
      location: activity.location,
      participants_count: activity.participants_count,
      hours: activity.hours,
      category: activity.category,
      status: activity.status
    })
    setIsActivityDialogOpen(true)
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user.name}</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="hover:bg-destructive hover:text-destructive-foreground">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
              <Calendar className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{activities.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Completed events</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <Award className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{reports.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Generated reports</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
              <Clock className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {activities.reduce((sum, activity) => sum + activity.hours, 0)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Service hours</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Participants</CardTitle>
              <Users className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {activities.reduce((sum, activity) => sum + activity.participants_count, 0)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Total participants</p>
            </CardContent>
          </Card>
        </div>

        <Card className="backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Reports Management</CardTitle>
            <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => { resetReportForm(); setEditingReport(null) }}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Report
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingReport ? 'Edit Report' : 'Add New Report'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleReportSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={reportForm.title}
                        onChange={(e) => setReportForm({...reportForm, title: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="academic_year">Academic Year</Label>
                      <Input
                        id="academic_year"
                        value={reportForm.academic_year}
                        onChange={(e) => setReportForm({...reportForm, academic_year: e.target.value})}
                        placeholder="2023-24"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="total_activities">Total Activities</Label>
                      <Input
                        id="total_activities"
                        type="number"
                        value={reportForm.total_activities}
                        onChange={(e) => setReportForm({...reportForm, total_activities: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="total_volunteers">Total Volunteers</Label>
                      <Input
                        id="total_volunteers"
                        type="number"
                        value={reportForm.total_volunteers}
                        onChange={(e) => setReportForm({...reportForm, total_volunteers: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="total_hours">Total Hours</Label>
                      <Input
                        id="total_hours"
                        type="number"
                        value={reportForm.total_hours}
                        onChange={(e) => setReportForm({...reportForm, total_hours: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="summary">Summary</Label>
                    <Textarea
                      id="summary"
                      value={reportForm.summary}
                      onChange={(e) => setReportForm({...reportForm, summary: e.target.value})}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsReportDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingReport ? 'Update' : 'Create'} Report
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report._id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{report.title}</h3>
                    <p className="text-sm text-muted-foreground">{report.academic_year} • {report.report_type}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => editReport(report)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleDeleteReport(report._id)}
                      className="hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Activities Management</CardTitle>
            <Dialog open={isActivityDialogOpen} onOpenChange={setIsActivityDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => { resetActivityForm(); setEditingActivity(null) }}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Activity
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingActivity ? 'Edit Activity' : 'Add New Activity'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleActivitySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="activity_title">Title</Label>
                    <Input
                      id="activity_title"
                      value={activityForm.title}
                      onChange={(e) => setActivityForm({...activityForm, title: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={activityForm.description}
                      onChange={(e) => setActivityForm({...activityForm, description: e.target.value})}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="activity_date">Date</Label>
                      <Input
                        id="activity_date"
                        type="date"
                        value={activityForm.activity_date}
                        onChange={(e) => setActivityForm({...activityForm, activity_date: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={activityForm.location}
                        onChange={(e) => setActivityForm({...activityForm, location: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="participants_count">Participants</Label>
                      <Input
                        id="participants_count"
                        type="number"
                        value={activityForm.participants_count}
                        onChange={(e) => setActivityForm({...activityForm, participants_count: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="hours">Hours</Label>
                      <Input
                        id="hours"
                        type="number"
                        value={activityForm.hours}
                        onChange={(e) => setActivityForm({...activityForm, hours: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsActivityDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingActivity ? 'Update' : 'Create'} Activity
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.slice(0, 5).map((activity) => (
                <div key={activity._id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(activity.activity_date).toLocaleDateString()} • {activity.category}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => editActivity(activity)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleDeleteActivity(activity._id)}
                      className="hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}