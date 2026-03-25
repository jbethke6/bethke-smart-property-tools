import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  buttonText?: string;
  variant?: "default" | "accent";
}

export function ServiceCard({ icon: Icon, title, description, href, buttonText = "Mehr erfahren", variant = "default" }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        variant === "accent"
          ? "border-primary/20 bg-accent"
          : "bg-card"
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <Link
        to={href}
        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        {buttonText} →
      </Link>
    </motion.div>
  );
}
