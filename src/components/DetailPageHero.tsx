import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface DetailPageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits?: string[];
  note?: string;
  buttonText?: string;
  buttonHref?: string;
  children?: ReactNode;
  image?: string;
}

export function DetailPageHero({
  title,
  subtitle,
  description,
  benefits,
  note,
  buttonText = "Angebot anfragen",
  buttonHref = "/kontakt",
  children,
  image,
}: DetailPageProps) {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {subtitle}
          </p>
          <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h1>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">{description}</p>
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-xl"
          >
            <img src={image} alt={title} className="w-full object-cover" loading="lazy" />
          </motion.div>
        )}

        {benefits && benefits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl"
          >
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {note && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl rounded-lg border border-primary/20 bg-accent/50 p-4 text-sm text-muted-foreground"
          >
            ℹ️ {note}
          </motion.div>
        )}

        {children}

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link to={buttonHref}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
