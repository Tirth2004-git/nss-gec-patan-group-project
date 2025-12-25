import { Calendar, MapPin, Users, Clock, Filter } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import { Button } from "@/components/ui/button";

// Sample data - will be replaced with database data
const activities = [
  {
    id: 1,
    title: "Blood Donation Camp",
    date: "2024-01-15",
    location: "GEC Patan Campus",
    category: "Health",
    participants: 120,
    description: "Annual blood donation drive in collaboration with Red Cross Society.",
    status: "Completed",
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    date: "2024-02-20",
    location: "Village Adalpur",
    category: "Environment",
    participants: 85,
    description: "Planted 500+ saplings as part of green initiative.",
    status: "Completed",
  },
  {
    id: 3,
    title: "Swachh Bharat Abhiyan",
    date: "2024-03-10",
    location: "Patan City",
    category: "Cleanliness",
    participants: 150,
    description: "City-wide cleanliness campaign with local authorities.",
    status: "Completed",
  },
  {
    id: 4,
    title: "Digital Literacy Camp",
    date: "2024-04-05",
    location: "Village Schools",
    category: "Education",
    participants: 60,
    description: "Teaching basic computer skills to rural school students.",
    status: "Upcoming",
  },
  {
    id: 5,
    title: "Health Awareness Camp",
    date: "2024-04-15",
    location: "Nearby Villages",
    category: "Health",
    participants: 100,
    description: "Free health checkup and awareness about hygiene.",
    status: "Upcoming",
  },
  {
    id: 6,
    title: "NSS Day Celebration",
    date: "2023-09-24",
    location: "GEC Patan Campus",
    category: "Cultural",
    participants: 200,
    description: "Celebration of NSS Day with cultural programs and awareness.",
    status: "Completed",
  },
];

const categories = ["All", "Health", "Environment", "Cleanliness", "Education", "Cultural"];

const stats = [
  { icon: Calendar, value: "50+", label: "Annual Events" },
  { icon: Users, value: "5000+", label: "Beneficiaries" },
  { icon: MapPin, value: "20+", label: "Villages Covered" },
  { icon: Clock, value: "10K+", label: "Service Hours" },
];

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredActivities = selectedCategory === "All" 
    ? activities 
    : activities.filter(a => a.category === selectedCategory);

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
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Events & Programs</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              NSS Activities
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Explore our community service events, social initiatives, and 
              nation-building activities throughout the year.
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

      {/* Filter & Activities */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Event Calendar"
            subtitle="Browse our activities and upcoming events"
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-8 justify-center">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity, index) => (
              <div 
                key={activity.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 ${activity.status === "Upcoming" ? "bg-accent" : "bg-primary"}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === "Upcoming" 
                        ? "bg-accent/10 text-accent" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {activity.status}
                    </span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {activity.category}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{new Date(activity.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-accent" />
                      <span>{activity.participants} Participants</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Activities;
