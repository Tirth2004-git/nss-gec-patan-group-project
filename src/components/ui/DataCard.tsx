import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface DataCardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  children?: ReactNode;
  accent?: boolean;
}

const DataCard = ({ icon: Icon, title, description, children, accent = false }: DataCardProps) => {
  return (
    <div className={`glass-card rounded-2xl overflow-hidden hover-lift ${accent ? 'border-accent/30' : ''}`}>
      <div className={`p-6 ${accent ? 'bg-accent/5' : 'bg-primary/5'}`}>
        <div className="flex items-start gap-4">
          {Icon && (
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${accent ? 'bg-accent/10' : 'bg-primary/10'}`}>
              <Icon className={`w-6 h-6 ${accent ? 'text-accent' : 'text-primary'}`} />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1 truncate">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            )}
          </div>
        </div>
      </div>
      {children && (
        <div className="p-6 pt-0">
          {children}
        </div>
      )}
    </div>
  );
};

export default DataCard;
