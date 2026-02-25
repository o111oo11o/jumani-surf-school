import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  variant?: "primary" | "secondary" | "whatsapp";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-teal-deep text-white shadow-btn hover:bg-[#039d90] hover:-translate-y-0.5 hover:shadow-lg",
  secondary:
    "bg-transparent text-teal-deep border-2 border-teal-deep hover:bg-teal-deep/10 hover:-translate-y-0.5",
  whatsapp:
    "bg-whatsapp text-white shadow-[0_4px_12px_rgba(37,211,102,0.25)] hover:bg-[#1fb855] hover:-translate-y-0.5",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold transition-all duration-200 min-h-[48px] cursor-pointer",
    variants[variant],
    className
  );

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
