import { motion } from "framer-motion";
import { ArrowDown, Database, Brain, BarChart3 } from "lucide-react";
import { DataParticles, GridBackground } from "./DataParticles";
import { TypewriterText } from "./TypewriterText";
import { AnimatedCounter } from "./AnimatedCounter";

const metrics = [
  { label: "CGPA", value: 8.43, decimals: 2, suffix: " / 10", icon: BarChart3 },
  { label: "Projects", value: 3, decimals: 0, suffix: "+", icon: Database },
  { label: "Core Focus", value: "ML & Analytics", isText: true, icon: Brain },
];

export const HeroSection = () => {
  const scrollToOverview = () => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      <DataParticles />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm font-mono text-primary">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <TypewriterText
                texts={[
                  "Initializing Data Pipeline...",
                  "Loading Analyst Profile...",
                  "Analysis Ready",
                ]}
                speed={40}
                delayBetween={1000}
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Analyzing the</span>
            <br />
            <span className="gradient-text text-glow-cyan">Analyst</span>
          </motion.h1>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
              Adarsh Rajaboina
            </h2>
            <p className="text-muted-foreground font-mono text-sm">
              Data Analyst • ML Engineer • Deep Learning Enthusiast
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="metric-card group"
              >
                <metric.icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {metric.isText ? (
                    metric.value
                  ) : (
                    <AnimatedCounter
                      end={metric.value as number}
                      decimals={metric.decimals}
                      suffix={metric.suffix}
                      duration={2}
                    />
                  )}
                </div>
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            onClick={scrollToOverview}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-primary/25 transition-shadow"
          >
            Analyze My Profile
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
