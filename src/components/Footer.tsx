import { motion } from "framer-motion";
import { Terminal, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Terminal className="w-4 h-4 text-background" />
            </div>
            <span className="font-semibold text-foreground">
              Adarsh<span className="text-primary">.</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground font-mono"
          >
            Analyzing data. Building insights. Driving decisions.
          </motion.p>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>by Adarsh Rajaboina</span>
          </motion.div>
        </div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </footer>
  );
};
