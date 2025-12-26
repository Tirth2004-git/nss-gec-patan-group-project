import { Link } from "react-router-dom";
import {
  Users,
  Award,
  Heart,
  FileText,
  Calendar,
  ArrowRight,
  BookOpen,
  Target,
  Handshake,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import DataCard from "@/components/ui/DataCard";
import Faqs from "./Faqs";
import HeroSection from "./Herosection";

const stats = [
  { icon: Users, value: "200+", label: "Active Volunteers" },
  { icon: Calendar, value: "50+", label: "Annual Activities" },
  { icon: Award, value: "25+", label: "Achievements" },
  { icon: Heart, value: "10K+", label: "Hours of Service" },
];

const quickLinks = [
  {
    icon: Heart,
    title: "Sainik Welfare Fund",
    description:
      "Supporting the families of our brave soldiers through community contributions.",
    path: "/welfare",
    accent: true,
  },
  {
    icon: Award,
    title: "Achievements",
    description: "Celebrating our volunteers' accomplishments and recognition.",
    path: "/achievements",
  },
  {
    icon: Users,
    title: "Volunteer Details",
    description:
      "Meet our dedicated team of NSS volunteers making a difference.",
    path: "/volunteers",
  },
  {
    icon: Calendar,
    title: "NSS Activities",
    description: "Explore our community service events and social initiatives.",
    path: "/activities",
    accent: true,
  },
  {
    icon: FileText,
    title: "Annual Reports",
    description:
      "Access detailed yearly reports of our activities and achievements.",
    path: "/reports",
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <StatCard {...stat} accent={index % 2 === 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                About NSS
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Better Citizens Through Service
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The National Service Scheme (NSS) is a Central Sector Scheme
                under the Ministry of Youth Affairs & Sports, Government of
                India. NSS was launched in 1969 with the primary objective of
                developing the personality and character of student youth
                through voluntary community service.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At GEC Patan, our NSS unit actively engages students in various
                community development programs, social awareness campaigns, and
                nation-building activities, fostering a sense of responsibility
                and commitment to serve society.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Handshake className="w-5 h-5 text-accent" />
                  <span>Community Service</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Target className="w-5 h-5 text-accent" />
                  <span>Skill Development</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Social Welfare</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <div className="w-full h-full rounded-2xl bg-card shadow-strong flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                      <Target className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      To develop student personality through community service
                      and promote national integration.
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Explore Our Portal"
            subtitle="Quick access to all NSS resources, reports, and information"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={link.path} to={link.path} className="group">
                <DataCard
                  icon={link.icon}
                  title={link.title}
                  description={link.description}
                  accent={link.accent}
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </DataCard>
              </Link>
            ))}
            cd{" "}
          </div>
        </div>
      </section>
      {/* {this is FAQ section } */}
      <section>
        <Faqs></Faqs>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden hero-gradient p-8 md:p-12 lg:p-16">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Join the Movement
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Be a part of the change. Join NSS and contribute to building a
                better India through selfless service and community development.
              </p>
              <Link to="/activities">
                <Button variant="hero" size="lg">
                  View Our Activities
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
