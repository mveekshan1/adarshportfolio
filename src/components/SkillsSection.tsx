import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  projects?: string[];
  category: string;
}

const skillCategories = [
  {
    title: "Programming Languages",
    color: "from-primary to-cyan",
    skills: [
      { name: "Python", level: 90, projects: ["Sentiment Analysis", "Big Data Analytics"], category: "Programming" },
      { name: "Java", level: 75, projects: ["E-Voting System"], category: "Programming" },
    ],
  },
  {
    title: "Data Science & Analytics",
    color: "from-accent to-violet",
    skills: [
      { name: "Machine Learning", level: 85, projects: ["Sentiment Analysis"], category: "Data Science" },
      { name: "Deep Learning", level: 80, projects: ["Bi-GRU Model"], category: "Data Science" },
      { name: "Data Mining", level: 78, projects: ["Big Data Analytics"], category: "Data Science" },
      { name: "NLP", level: 82, projects: ["GloVe Embeddings"], category: "Data Science" },
      { name: "Data Analysis", level: 88, projects: ["All Projects"], category: "Data Science" },
    ],
  },
  {
    title: "Databases",
    color: "from-emerald to-primary",
    skills: [
      { name: "MySQL", level: 85, projects: ["E-Voting System"], category: "Databases" },
      { name: "MongoDB", level: 70, projects: [], category: "Databases" },
    ],
  },
  {
    title: "Tools & Systems",
    color: "from-blue to-accent",
    skills: [
      { name: "PySpark", level: 80, projects: ["Big Data Analytics"], category: "Tools" },
      { name: "Git/GitHub", level: 85, projects: ["All Projects"], category: "Tools" },
      { name: "Scikit-learn", level: 82, projects: ["ML Models"], category: "Tools" },
      { name: "Cloud Computing", level: 70, projects: [], category: "Tools" },
    ],
  },
];

const SkillBar = ({ skill, delay, isInView }: { skill: Skill; delay: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-xs font-mono text-primary"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="skill-bar-fill relative"
        >
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-2 bg-foreground/50 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
      
      {/* Tooltip */}
      {isHovered && skill.projects && skill.projects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 mt-2 p-3 glass rounded-lg z-10 min-w-48"
        >
          <div className="text-xs text-muted-foreground mb-1">Used in:</div>
          <div className="flex flex-wrap gap-1">
            {skill.projects.map((project) => (
              <span key={project} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                {project}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 text-sm font-mono text-accent mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Feature Extraction Complete
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Skills</span>{" "}
            <span className="gradient-text">Analysis</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical proficiency breakdown across programming, data science, databases, and tooling
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    {category.skills.length} skills • hover for details
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Languages", value: "2" },
            { label: "Frameworks", value: "5+" },
            { label: "Tools", value: "8+" },
            { label: "Avg Proficiency", value: "80%" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-4 glass rounded-xl">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
