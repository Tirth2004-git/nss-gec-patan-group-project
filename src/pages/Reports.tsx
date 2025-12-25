import { FileText, Download, Calendar, Eye } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import { Button } from "@/components/ui/button";

// Sample data - will be replaced with database data
const reports = [
  {
    id: 1,
    title: "Annual Report 2023-24",
    year: "2023-24",
    category: "Annual Report",
    pages: 45,
    uploadDate: "2024-03-15",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "NSS Camp Report - Summer 2023",
    year: "2023",
    category: "Camp Report",
    pages: 28,
    uploadDate: "2023-06-10",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Annual Report 2022-23",
    year: "2022-23",
    category: "Annual Report",
    pages: 42,
    uploadDate: "2023-03-20",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Special Camp Report - Village Adoption",
    year: "2023",
    category: "Special Report",
    pages: 18,
    uploadDate: "2023-02-28",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Annual Report 2021-22",
    year: "2021-22",
    category: "Annual Report",
    pages: 38,
    uploadDate: "2022-03-18",
    downloadUrl: "#",
  },
  {
    id: 6,
    title: "Blood Donation Drive Report",
    year: "2022",
    category: "Activity Report",
    pages: 12,
    uploadDate: "2022-02-10",
    downloadUrl: "#",
  },
];

const stats = [
  { icon: FileText, value: "25+", label: "Total Reports" },
  { icon: Calendar, value: "5", label: "Years Covered" },
  { icon: Download, value: "500+", label: "Downloads" },
  { icon: Eye, value: "2K+", label: "Views" },
];

const Reports = () => {
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
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Documentation</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Annual Reports
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Access detailed yearly reports of our NSS activities, achievements, 
              and community service initiatives.
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

      {/* Reports Grid */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Report Archive"
            subtitle="Browse and download our official reports and documentation"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <div 
                key={report.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/5 p-6">
                  <div className="w-16 h-20 bg-card rounded-lg shadow-soft mx-auto flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-2">
                      {report.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {report.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Year</span>
                      <span className="font-medium text-foreground">{report.year}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Pages</span>
                      <span className="font-medium text-foreground">{report.pages}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Uploaded</span>
                      <span className="font-medium text-foreground">
                        {new Date(report.uploadDate).toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-3xl p-8 lg:p-12 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Specific Report?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you're looking for a specific report or documentation that's not listed here, 
              please contact our NSS unit office.
            </p>
            <Button variant="navy" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Reports;
