import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const educationData = [
  {
    period: "Sep 2022 – Present",
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Malla Reddy University",
    location: "Hyderabad, India",
    grade: "CGPA: 8.43 / 10",
    level: "EQF Level 6",
    icon: GraduationCap,
    current: true,
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Deep Learning",
      "Big Data Analytics",
      "Database Management Systems",
      "Data Mining",
      "Cloud Computing",
      "Computer Networks",
      "Artificial Intelligence",
      "Probability & Statistics",
    ],
  },
  {
    period: "Jun 2020 – May 2022",
    title: "Intermediate Education (Higher Secondary)",
    institution: "Master Minds Junior College",
    location: "Siddipet, India",
    grade: "Percentage: 89.5%",
    icon: BookOpen,
    current: false,
    coursework: ["Mathematics", "Physics", "Chemistry"],
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald/30 text-sm font-mono text-emerald mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Timeline Loaded
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Education</span>{" "}
            <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey and key milestones in computer science and data analytics
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-muted" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    edu.current
                      ? "bg-gradient-to-br from-primary to-accent glow-cyan"
                      : "bg-muted border-2 border-border"
                  }`}
                >
                  <edu.icon className={`w-5 h-5 ${edu.current ? "text-background" : "text-muted-foreground"}`} />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 hover:glow-cyan transition-shadow"
                >
                  {/* Period Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-primary">{edu.period}</span>
                    {edu.current && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{edu.title}</h3>

                  {/* Institution */}
                  <div className="text-sm text-muted-foreground mb-3">
                    <span className="text-foreground font-medium">{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>

                  {/* Grade */}
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium gradient-text">{edu.grade}</span>
                    {edu.level && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{edu.level}</span>
                      </>
                    )}
                  </div>

                  {/* Coursework */}
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Key Coursework
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.slice(0, 6).map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground"
                        >
                          {course}
                        </span>
                      ))}
                      {edu.coursework.length > 6 && (
                        <span className="px-2 py-1 rounded-md bg-primary/10 text-xs text-primary">
                          +{edu.coursework.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
