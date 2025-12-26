// import { ReactNode } from "react";
// import { LucideIcon } from "lucide-react";

// interface DataCardProps {
//   icon?: LucideIcon;
//   title: string;
//   description?: string;
//   children?: ReactNode;
//   accent?: boolean;
// }

// const DataCard = ({ icon: Icon, title, description, children, accent = false }: DataCardProps) => {
//   return (
//     <div className={`glass-card rounded-2xl overflow-hidden hover-lift ${accent ? 'border-accent/30' : ''}`}>
//       <div className={`p-6 ${accent ? 'bg-accent/5' : 'bg-primary/5'}`}>
//         <div className="flex items-start gap-4">
//           {Icon && (
//             <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${accent ? 'bg-accent/10' : 'bg-primary/10'}`}>
//               <Icon className={`w-6 h-6 ${accent ? 'text-accent' : 'text-primary'}`} />
//             </div>
//           )}
//           <div className="flex-1 min-w-0">
//             <h3 className="font-serif text-xl font-semibold text-foreground mb-1 truncate">{title}</h3>
//             {description && (
//               <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
//             )}
//           </div>
//         </div>
//       </div>
//       {children && (
//         <div className="p-6 pt-0">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataCard;

import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface DataCardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  children?: ReactNode;
  accent?: boolean;
}

const DataCard = ({ 
  icon: Icon, 
  title, 
  description, 
  children, 
  accent = false 
}: DataCardProps) => {
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-2xl 
        bg-white border transition-all duration-500 ease-out
        hover:shadow-2xl hover:-translate-y-2
        ${accent ? 'border-orange-200/50' : 'border-gray-200/50'}
      `}
    >
      {/* Gradient Background on Hover */}
      <div 
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500
          ${accent 
            ? 'bg-gradient-to-br from-orange-50 via-white to-orange-50/30' 
            : 'bg-gradient-to-br from-blue-50 via-white to-blue-50/30'
          }
        `}
      />

      {/* Animated Border Glow */}
      <div 
        className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          ${accent 
            ? 'shadow-[0_0_30px_rgba(249,115,22,0.15)]' 
            : 'shadow-[0_0_30px_rgba(30,64,175,0.15)]'
          }
        `}
      />

      {/* Content Container */}
      <div className="relative z-10 p-6">
        {/* Icon Container with Animation */}
        {Icon && (
          <div className="mb-4 relative">
            <div 
              className={`
                w-14 h-14 rounded-xl flex items-center justify-center
                transition-all duration-500 ease-out
                group-hover:scale-110 group-hover:rotate-3
                ${accent 
                  ? 'bg-gradient-to-br from-orange-100 to-orange-50' 
                  : 'bg-gradient-to-br from-blue-100 to-blue-50'
                }
              `}
            >
              <Icon 
                className={`
                  w-6 h-6 transition-all duration-500
                  group-hover:scale-110
                  ${accent ? 'text-orange-600' : 'text-blue-700'}
                `} 
              />
            </div>
            
            {/* Decorative Circle */}
            <div 
              className={`
                absolute -top-2 -right-2 w-8 h-8 rounded-full
                opacity-0 group-hover:opacity-20 transition-all duration-500
                group-hover:scale-150
                ${accent ? 'bg-orange-400' : 'bg-blue-400'}
              `}
            />
          </div>
        )}

        {/* Title */}
        <h3 
          className="
            font-serif text-xl font-bold mb-2
            text-gray-800 group-hover:text-gray-900
            transition-colors duration-300
          "
        >
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p 
            className="
              text-sm leading-relaxed mb-4
              text-gray-600 group-hover:text-gray-700
              transition-colors duration-300
            "
          >
            {description}
          </p>
        )}

        {/* Children (Learn More link, etc.) */}
        {children && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            {children}
          </div>
        )}
      </div>

      {/* Corner Accent */}
      <div 
        className={`
          absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12
          rounded-full blur-2xl opacity-0 group-hover:opacity-30
          transition-all duration-700
          ${accent ? 'bg-orange-400' : 'bg-blue-400'}
        `}
      />

      {/* Bottom Accent Line */}
      <div 
        className={`
          absolute bottom-0 left-0 h-1 w-0 group-hover:w-full
          transition-all duration-500 ease-out
          ${accent 
            ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
            : 'bg-gradient-to-r from-blue-600 to-blue-800'
          }
        `}
      />
    </div>
  );
};

export default DataCard;
