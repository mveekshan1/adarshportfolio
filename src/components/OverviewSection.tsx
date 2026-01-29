import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Wrench, Target, MapPin, Mail, Phone } from "lucide-react";

const insightCards = [
  {
    icon: GraduationCap,
    title: "Academic Focus",
    value: "Computer Science",
    description: "B.Tech CSE with specialization in Data Science & Analytics",
    color: "primary",
  },
  {
    icon: Wrench,
    title: "Tool Proficiency",
    value: "Python, PySpark, ML",
    description: "Deep expertise in data pipelines, NLP, and neural networks",
    color: "accent",
  },
  {
    icon: Target,
    title: "Domain Strength",
    value: "Deep Learning",
    description: "Bi-GRU, GloVe embeddings, sentiment analysis, big data",
    color: "cyan",
  },
];

const profileInfo = [
  { icon: MapPin, label: "Location", value: "Hyderabad, India" },
  { icon: Mail, label: "Email", value: "rajaboinaadarsh79@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9030777978" },
];

export const OverviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm font-mono text-primary mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Query Executed Successfully
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Profile</span>{" "}
            <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Data-driven overview of academic background, technical expertise, and career aspirations
          </p>
        </motion.div>

        {/* Profile Summary Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* About Text */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="text-primary font-mono text-sm">{">"}</span>
                About Me
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Motivated Computer Science student with a strong academic foundation in{" "}
                <span className="text-primary">Data Science</span> and{" "}
                <span className="text-accent">Data Analytics</span>. Experienced in working with
                structured datasets, programming, and analytical techniques to extract meaningful
                insights and address real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aspiring to pursue advanced studies in data science and analytics, with a focus on
                applying data-driven methods to management and economic decision-making in
                business-oriented environments.
              </p>
            </div>

            {/* Contact Info */}
            <div className="lg:w-80">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="text-primary font-mono text-sm">{">"}</span>
                Contact Data
              </h3>
              <div className="space-y-3">
                {profileInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                  >
                    <info.icon className="w-4 h-4 text-primary" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </div>
                      <div className="text-sm text-foreground truncate">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insightCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="metric-card group hover:glow-cyan"
            >
              <div className="flex items-start justify-between mb-4">
                <card.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono text-muted-foreground">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{card.title}</h3>
              <div className="text-xl font-bold gradient-text mb-2">{card.value}</div>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
