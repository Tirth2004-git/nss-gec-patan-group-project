import { Award, Trophy, Medal, Star } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";

// Sample data - will be replaced with database data
const achievements = [
  {
    id: 1,
    title: "Best NSS Unit Award",
    year: "2023",
    category: "State Level",
    description: "Recognized as the best performing NSS unit in Gujarat for outstanding community service.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Blood Donation Champion",
    year: "2023",
    category: "University Level",
    description: "Highest blood donation collection among all engineering colleges in GTU.",
    icon: Medal,
  },
  {
    id: 3,
    title: "Environment Conservation Award",
    year: "2022",
    category: "District Level",
    description: "Excellence in tree plantation and environmental awareness campaigns.",
    icon: Award,
  },
  {
    id: 4,
    title: "Social Service Excellence",
    year: "2022",
    category: "State Level",
    description: "Outstanding contribution to rural development and community welfare programs.",
    icon: Star,
  },
  {
    id: 5,
    title: "Youth Leadership Award",
    year: "2021",
    category: "National Level",
    description: "Recognition for exemplary youth leadership and community engagement.",
    icon: Trophy,
  },
  {
    id: 6,
    title: "Swachh Bharat Champion",
    year: "2021",
    category: "District Level",
    description: "Best practices in cleanliness and sanitation awareness drives.",
    icon: Medal,
  },
];

const stats = [
  { icon: Trophy, value: "25+", label: "Total Awards" },
  { icon: Star, value: "5", label: "State Level" },
  { icon: Medal, value: "8", label: "University Level" },
  { icon: Award, value: "12", label: "District Level" },
];

const Achievements = () => {
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
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Recognition</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Achievements
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Celebrating the outstanding accomplishments and recognition received by our 
              NSS unit and dedicated volunteers.
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

      {/* Achievements Grid */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Awards & Recognition"
            subtitle="Our journey of excellence in community service"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.id}
                  className="glass-card rounded-2xl overflow-hidden hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-1">
                          {achievement.category}
                        </span>
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {achievement.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>Year: {achievement.year}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Achievements;
