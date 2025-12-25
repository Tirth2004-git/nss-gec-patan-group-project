import { Users, GraduationCap, BookOpen, UserCheck } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import DataTable from "@/components/ui/DataTable";

// Sample data - will be replaced with database data
const volunteers = [
  { id: 1, name: "Patel Rahul K.", enrollment: "210420107001", branch: "Computer Engineering", year: "3rd Year", role: "Team Leader" },
  { id: 2, name: "Shah Priya M.", enrollment: "210420107002", branch: "Civil Engineering", year: "3rd Year", role: "Secretary" },
  { id: 3, name: "Desai Amit R.", enrollment: "210420107003", branch: "Mechanical Engineering", year: "2nd Year", role: "Volunteer" },
  { id: 4, name: "Prajapati Neha S.", enrollment: "210420107004", branch: "Electrical Engineering", year: "2nd Year", role: "Volunteer" },
  { id: 5, name: "Modi Harsh P.", enrollment: "210420107005", branch: "Computer Engineering", year: "3rd Year", role: "Coordinator" },
  { id: 6, name: "Trivedi Anjali B.", enrollment: "210420107006", branch: "Civil Engineering", year: "2nd Year", role: "Volunteer" },
  { id: 7, name: "Joshi Karan V.", enrollment: "210420107007", branch: "Mechanical Engineering", year: "3rd Year", role: "Volunteer" },
  { id: 8, name: "Raval Shreya D.", enrollment: "210420107008", branch: "Electrical Engineering", year: "3rd Year", role: "Volunteer" },
];

const columns = [
  { key: "name", header: "Name" },
  { key: "enrollment", header: "Enrollment No." },
  { key: "branch", header: "Branch" },
  { key: "year", header: "Year" },
  { 
    key: "role", 
    header: "Role",
    render: (item: typeof volunteers[0]) => (
      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
        item.role === "Team Leader" 
          ? "bg-accent/10 text-accent" 
          : item.role === "Secretary" || item.role === "Coordinator"
          ? "bg-primary/10 text-primary"
          : "bg-muted text-muted-foreground"
      }`}>
        {item.role}
      </span>
    )
  },
];

const stats = [
  { icon: Users, value: "200+", label: "Active Volunteers" },
  { icon: GraduationCap, value: "4", label: "Branches" },
  { icon: BookOpen, value: "3", label: "Year Groups" },
  { icon: UserCheck, value: "15", label: "Core Team" },
];

const Volunteers = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Our Team</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Volunteer Details
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Meet our dedicated team of NSS volunteers who are committed to making a 
              positive difference in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} accent={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Officer Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  NSS Program Officer
                </h2>
                <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Prof. XYZ Sharma</h3>
                  <p className="text-sm text-muted-foreground mb-1">Assistant Professor, Department of Computer Engineering</p>
                  <p className="text-sm text-accent">Program Officer, NSS Unit</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Under the guidance of our Program Officer, the NSS unit organizes various 
                  community service activities and ensures the holistic development of student volunteers.
                </p>
              </div>
              <div className="bg-accent/5 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Core Committee</h3>
                <ul className="space-y-4">
                  {[
                    { name: "Team Leader", count: "2 Members" },
                    { name: "Secretary", count: "2 Members" },
                    { name: "Coordinators", count: "6 Members" },
                    { name: "Core Volunteers", count: "5 Members" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center justify-between p-3 bg-card rounded-lg">
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Table */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Volunteer Directory"
            subtitle="Complete list of active NSS volunteers for the current academic year"
          />
          <DataTable columns={columns} data={volunteers} />
          <p className="text-center text-sm text-muted-foreground mt-6">
            Showing {volunteers.length} of 200+ active volunteers
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Volunteers;
