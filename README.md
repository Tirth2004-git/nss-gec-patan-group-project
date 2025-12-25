# NSS GEC Patan Portal

A modern, responsive web portal for the National Service Scheme (NSS) unit at Government Engineering College, Patan. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Public Portal
- **Homepage** - Welcome page with NSS information
- **Activities** - Browse community service activities
- **Volunteers** - Meet our dedicated volunteers
- **Reports** - Access annual and quarterly reports
- **Gallery** - Photo gallery of events
- **About & Contact** - Information and contact details

### Admin Dashboard
- **Secure Authentication** - Email/password login system
- **Reports Management** - Full CRUD operations for reports
- **Activities Management** - Create, edit, delete activities
- **Dashboard Analytics** - Real-time statistics and metrics
- **Responsive Design** - Works on all devices

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: Radix UI, Tailwind CSS, Lucide Icons
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Notifications**: Sonner Toast
- **Forms**: React Hook Form
- **Styling**: Tailwind CSS with custom design system

## 📁 Project Structure

```
nss-gec-portal/
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── ...
│   │   └── ...
│   ├── pages/
│   │   ├── admin/                 # Admin-only pages
│   │   │   ├── Login.tsx          # Admin login page
│   │   │   └── Dashboard.tsx      # Admin dashboard
│   │   ├── Index.tsx              # Homepage
│   │   ├── Activities.tsx         # Activities page
│   │   ├── Volunteers.tsx         # Volunteers page
│   │   ├── Reports.tsx            # Reports page
│   │   └── ...
│   ├── api/                       # API services
│   │   └── mockApi.ts             # Mock API for development
│   ├── lib/                       # Utility libraries
│   │   ├── mockAuth.ts            # Mock authentication
│   │   └── utils.ts               # Helper functions
│   ├── App.tsx                    # Main app component
│   └── main.tsx                   # App entry point
├── public/                        # Static assets
├── scripts/
│   └── seed-admin-simple.js       # Admin user creation script
└── package.json
```

## 🔧 Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nss-gec-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Public Portal: `http://localhost:8080`
   - Admin Login: `http://localhost:8080/admin/login`

## 🔐 Admin Access

### Default Admin Credentials
- **Email**: `admin123@gmail.com`
- **Password**: `admin@123`

### Admin Routes
- `/admin/login` - Admin login page
- `/admin/dashboard` - Admin dashboard (protected)

## 📊 Code Flow & Architecture

### 1. Authentication Flow

```
Login Page (Login.tsx)
    ↓
Mock Auth Service (mockAuth.ts)
    ↓
Verify Credentials
    ↓
Store User Session (localStorage)
    ↓
Redirect to Dashboard
```

**Key Files:**
- `src/pages/admin/Login.tsx` - Login form component
- `src/lib/mockAuth.ts` - Authentication service
- `src/App.tsx` - Route protection

### 2. Admin Dashboard Flow

```
Dashboard Component (Dashboard.tsx)
    ↓
Check Authentication Status
    ↓
Load Data from Mock API
    ↓
Render Statistics & Management Panels
    ↓
Handle CRUD Operations
```

**Key Components:**
- **Statistics Cards** - Display activity counts, reports, hours
- **Reports Management** - Create, edit, delete reports
- **Activities Management** - Manage community activities
- **Logout Functionality** - Clear session and redirect

### 3. Data Management

```
Mock API Service (mockApi.ts)
    ↓
In-Memory Data Storage
    ↓
CRUD Operations
    ↓
Promise-based Responses
```

**Mock Data Structure:**
```typescript
// Reports
{
  _id: string,
  title: string,
  report_type: 'Annual' | 'Quarterly',
  academic_year: string,
  total_activities: number,
  total_volunteers: number,
  total_hours: number,
  summary: string,
  file_url?: string,
  created_at: Date,
  updated_at: Date
}

// Activities
{
  _id: string,
  title: string,
  description: string,
  activity_date: Date,
  location: string,
  participants_count: number,
  hours: number,
  category: string,
  status: 'Completed' | 'Ongoing' | 'Planned',
  created_at: Date,
  updated_at: Date
}
```

### 4. Component Architecture

```
App.tsx (Router)
    ↓
Public Pages (Index, Activities, etc.)
    ↓
Admin Pages (Login, Dashboard)
    ↓
UI Components (Button, Card, Input, etc.)
    ↓
Utility Functions (utils.ts)
```

## 🎨 UI/UX Design System

### Color Scheme
- **Primary**: Navy blue (`oklch(0.35 0.12 250)`)
- **Accent**: Saffron (`oklch(0.75 0.15 65)`)
- **Background**: Light with gradient overlays
- **Cards**: Glassmorphism with backdrop blur

### Design Principles
- **Mobile-First**: Responsive design for all devices
- **Accessibility**: WCAG compliant components
- **Modern**: Clean, minimal interface
- **Professional**: Suitable for educational institutions

## 🔄 Development Workflow

### Adding New Features

1. **Create Component**
   ```bash
   # Create new component in appropriate directory
   src/components/NewComponent.tsx
   ```

2. **Add Route** (if needed)
   ```typescript
   // In App.tsx
   <Route path="/new-route" element={<NewComponent />} />
   ```

3. **Update Mock API** (if needed)
   ```typescript
   // In src/api/mockApi.ts
   export async function newApiFunction() {
     // Implementation
   }
   ```

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Component Structure**: Functional components with hooks
- **File Naming**: PascalCase for components, camelCase for utilities

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔮 Future Enhancements

### Database Integration
Replace mock services with real database:
- MongoDB with Mongoose
- PostgreSQL with Prisma
- Firebase Firestore

### Additional Features
- **User Roles**: Multiple admin levels
- **File Upload**: Document and image management
- **Email Notifications**: Automated alerts
- **Analytics**: Advanced reporting and charts
- **Mobile App**: React Native version

## 📝 API Endpoints (Mock)

### Authentication
- `getUserWithPassword(email)` - Get user by email
- `verifyPassword(password, hash)` - Verify password

### Reports
- `getReports()` - Get all reports
- `createReport(data)` - Create new report
- `updateReport(id, data)` - Update report
- `deleteReport(id)` - Delete report

### Activities
- `getActivities()` - Get all activities
- `createActivity(data)` - Create new activity
- `updateActivity(id, data)` - Update activity
- `deleteActivity(id)` - Delete activity

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process on port 8080
   npx kill-port 8080
   ```

2. **Module Not Found**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript Errors**
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for NSS GEC Patan**