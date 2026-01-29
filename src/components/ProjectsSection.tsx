import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain,
  Database,
  Shield,
  ExternalLink,
  X,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  color: string;
  period: string;
  summary: string;
  problem: string;
  approach: string[];
  tools: string[];
  outcome: string;
  link: string;
  stats: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: "sentiment",
    title: "Sentiment Analysis of Financial News Headlines Using Bidirectional GRU with GloVe Embeddings",
    shortTitle: "Sentiment Analysis (Bi-GRU)",
    icon: Brain,
    color: "primary",
    period: "Aug 2025 – Oct 2025",
    summary: "Deep learning sentiment classifier for financial news using NLP",
    problem:
      "Financial news sentiment significantly impacts market behavior. Manual analysis is slow and subjective. Need automated, accurate classification of news headlines as positive or negative.",
    approach: [
      "Data Collection & Preprocessing",
      "Text Cleaning & Tokenization",
      "GloVe Word Embeddings Integration",
      "Bidirectional GRU Architecture",
      "Model Training & Validation",
      "Performance Evaluation",
    ],
    tools: ["Python", "TensorFlow/Keras", "GloVe", "NLTK", "Pandas", "NumPy"],
    outcome:
      "Successfully built a deep learning model for binary sentiment classification. Enhanced understanding of NLP pipelines, sequence modeling, and financial text analysis.",
    link: "https://github.com/Adarsh-Rajaboina/Sentiment-Analysis-using-GRU.git",
    stats: [
      { label: "Model Type", value: "Bi-GRU" },
      { label: "Embeddings", value: "GloVe" },
      { label: "Task", value: "Binary Classification" },
    ],
  },
  {
    id: "bigdata",
    title: "Big Data Analytics on Diabetes Dataset using PySpark",
    shortTitle: "Big Data Analytics (PySpark)",
    icon: Database,
    color: "accent",
    period: "Sep 2025 – Oct 2025",
    summary: "Large-scale health data analysis using distributed computing",
    problem:
      "Healthcare datasets with 100k+ records require scalable processing. Traditional tools struggle with volume. Need distributed analytics to identify diabetes risk patterns.",
    approach: [
      "Data Loading with Spark",
      "Distributed Data Cleaning",
      "Feature Transformation",
      "Exploratory Data Analysis",
      "Correlation Analysis",
      "Pattern Identification",
    ],
    tools: ["PySpark", "Apache Spark", "Python", "Pandas", "Matplotlib", "Jupyter"],
    outcome:
      "Analyzed 100,000+ health records with 31 features. Identified key risk factors including age, BMI, glucose levels, and lifestyle indicators. Demonstrated scalable health analytics capabilities.",
    link: "https://github.com/Adarsh-Rajaboina/Big_Data_Analytics_Project",
    stats: [
      { label: "Records", value: "100k+" },
      { label: "Features", value: "31" },
      { label: "Framework", value: "PySpark" },
    ],
  },
  {
    id: "evoting",
    title: "Secure E-Voting System",
    shortTitle: "E-Voting System",
    icon: Shield,
    color: "emerald",
    period: "Feb 2025 – Mar 2025",
    summary: "Secure digital election platform with role-based access",
    problem:
      "Traditional voting is costly and inaccessible. Digital alternatives often lack security. Need a secure, transparent system with proper authentication and audit trails.",
    approach: [
      "System Architecture Design",
      "Secure Authentication Implementation",
      "Role-Based Access Control",
      "Database-Driven Vote Management",
      "Integrity Verification",
      "User Interface Development",
    ],
    tools: ["Java", "MySQL", "HTML/CSS", "JavaScript", "JDBC"],
    outcome:
      "Developed a functional e-voting platform with secure authentication, role management, and transparent vote tracking. Demonstrated software engineering and security principles.",
    link: "#",
    stats: [
      { label: "Security", value: "RBAC" },
      { label: "Backend", value: "Java" },
      { label: "Database", value: "MySQL" },
    ],
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
  onClick,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={onClick}
      className="project-card"
    >
      {/* Card Header */}
      <div className={`h-2 bg-gradient-to-r from-${project.color} to-accent`} />

      <div className="p-6">
        {/* Icon and Period */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-${project.color}/10 flex items-center justify-center`}>
            <project.icon className={`w-6 h-6 text-${project.color}`} />
          </div>
          <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.shortTitle}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>

        {/* Stats */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stats.map((stat) => (
            <div key={stat.label} className="px-3 py-1 rounded-full bg-muted/50 text-xs">
              <span className="text-muted-foreground">{stat.label}: </span>
              <span className="text-foreground font-medium">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
          <span>View Analysis</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-lg" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-border"
      >
        {/* Header */}
        <div className={`p-6 border-b border-border bg-gradient-to-r from-${project.color}/10 to-transparent`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl bg-${project.color}/20 flex items-center justify-center`}>
                <project.icon className={`w-7 h-7 text-${project.color}`} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">{project.shortTitle}</h2>
                <p className="text-sm text-muted-foreground font-mono">{project.period}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Problem Statement */}
          <div>
            <h3 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Problem Statement
            </h3>
            <p className="text-muted-foreground">{project.problem}</p>
          </div>

          {/* Approach Pipeline */}
          <div>
            <h3 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Approach Pipeline
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.approach.map((step, index) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-2 rounded-lg bg-muted/50 text-sm text-foreground"
                  >
                    {step}
                  </motion.div>
                  {index < project.approach.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tools Used */}
          <div>
            <h3 className="text-sm font-mono text-primary mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div>
            <h3 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Outcome & Insights
            </h3>
            <p className="text-muted-foreground">{project.outcome}</p>
          </div>

          {/* GitHub Link */}
          {project.link !== "#" && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              View on GitHub
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
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
            Model Training Complete
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Project</span>{" "}
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive exploration of key projects with detailed analysis pipelines, methodologies, and outcomes
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
