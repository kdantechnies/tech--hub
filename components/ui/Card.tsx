import { cn } from "../../lib/utils";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(
      "bg-white border border-brand-border p-8 rounded-[2rem]",
      "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
      "hover:shadow-premium-hover hover:-translate-y-2",
      className
    )}>
      {children}
    </div>
  );
};