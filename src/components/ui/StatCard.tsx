import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  accent?: boolean;
}

const StatCard = ({ icon: Icon, value, label, accent = false }: StatCardProps) => {
  return (
    <div className={`glass-card rounded-2xl p-6 text-center hover-lift ${accent ? 'border-accent/30' : ''}`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${accent ? 'bg-accent/10' : 'bg-primary/10'}`}>
        <Icon className={`w-7 h-7 ${accent ? 'text-accent' : 'text-primary'}`} />
      </div>
      <h3 className="font-serif text-3xl font-bold text-foreground mb-1">{value}</h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatCard;
