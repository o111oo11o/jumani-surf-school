import { cn } from "@/lib/utils/cn";
import { Container } from "./container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bg?: "sand" | "white" | "dark";
  id?: string;
};

const bgVariants = {
  sand: "bg-sand",
  white: "bg-white",
  dark: "bg-dark text-white",
};

export function Section({ children, className, bg = "sand", id }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", bgVariants[bg], className)}>
      <Container>{children}</Container>
    </section>
  );
}
