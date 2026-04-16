import { cn } from "../../lib/utils";

export const Section = ({ children, className, bg = "bg-white" }: { children: React.ReactNode; className?: string; bg?: string }) => {
  return (
    <section className={cn("py-20 md:py-32", bg, className)}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};