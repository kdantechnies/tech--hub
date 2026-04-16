import { cn } from "../../lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
}

export const Button = ({ variant = "primary", href, className, children, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 active:scale-95";
  
  const variants = {
    // 🟠 Primary: Solid Orange, White Text
    primary: "bg-[#FF6B00] text-white hover:bg-[#FF8533] shadow-lg shadow-orange-200/50",
    // ⚫ Secondary: Solid Black, White Text
    secondary: "bg-[#0A0A0A] text-white hover:bg-[#333333] shadow-lg shadow-black/10",
    // ⚪ Outline: Clear background, Black Border/Text
    outline: "border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white",
  };

  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};