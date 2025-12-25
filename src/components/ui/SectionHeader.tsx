interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
}

const SectionHeader = ({ title, subtitle, accent = false }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${accent ? 'gradient-text' : 'text-foreground'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="w-12 h-1 bg-accent rounded-full" />
        <div className="w-3 h-3 bg-primary rounded-full" />
        <div className="w-12 h-1 bg-accent rounded-full" />
      </div>
    </div>
  );
};

export default SectionHeader;
