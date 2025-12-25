import { Heart, IndianRupee, Calendar, TrendingUp } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import DataTable from "@/components/ui/DataTable";

// Sample data - will be replaced with database data
const welfareData = [
  { id: 1, year: "2023-24", amount: "₹ 25,000", contributors: 180, status: "Collected" },
  { id: 2, year: "2022-23", amount: "₹ 22,500", contributors: 165, status: "Submitted" },
  { id: 3, year: "2021-22", amount: "₹ 20,000", contributors: 150, status: "Submitted" },
  { id: 4, year: "2020-21", amount: "₹ 18,000", contributors: 140, status: "Submitted" },
  { id: 5, year: "2019-20", amount: "₹ 15,500", contributors: 125, status: "Submitted" },
];

const columns = [
  { key: "year", header: "Academic Year" },
  { key: "amount", header: "Amount Collected" },
  { key: "contributors", header: "Contributors" },
  { 
    key: "status", 
    header: "Status",
    render: (item: typeof welfareData[0]) => (
      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
        item.status === "Collected" 
          ? "bg-accent/10 text-accent" 
          : "bg-primary/10 text-primary"
      }`}>
        {item.status}
      </span>
    )
  },
];

const stats = [
  { icon: IndianRupee, value: "₹ 1.01L+", label: "Total Collection" },
  { icon: Heart, value: "760+", label: "Total Contributors" },
  { icon: Calendar, value: "5+", label: "Years Active" },
  { icon: TrendingUp, value: "15%", label: "Yearly Growth" },
];

const Welfare = () => {
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
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Sainik Welfare</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Sainik Welfare Fund
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Supporting the families of our brave soldiers through community contributions. 
              Every contribution counts towards honoring their sacrifice.
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

      {/* About Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  About Sainik Welfare Fund
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Sainik Welfare Fund is a noble initiative to support the families of our armed forces personnel. 
                  NSS volunteers at GEC Patan actively participate in collecting contributions from students, 
                  faculty, and staff to support this cause.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  સૈનિક કલ્યાણ ભંડોળ એ આપણા સશસ્ત્ર દળોના કર્મચારીઓના પરિવારોને ટેકો આપવા માટેની એક ઉમદા પહેલ છે.
                </p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">How We Contribute</h3>
                <ul className="space-y-3">
                  {[
                    "Voluntary donations from students",
                    "Faculty and staff contributions",
                    "Fundraising events and drives",
                    "Annual collection campaigns"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Table Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Collection Records"
            subtitle="Year-wise record of Sainik Welfare Fund contributions"
          />
          <DataTable columns={columns} data={welfareData} />
        </div>
      </section>
    </PageLayout>
  );
};

export default Welfare;
