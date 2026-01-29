import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
  mode: string;
}

const certifications: Certification[] = [
  {
    id: "python-basics",
    title: "Python Basics",
    issuer: "Coursera (University of Michigan)",
    date: "June 2023",
    description:
      "Covered fundamental programming concepts using Python, including variables, control structures, functions, and basic data handling.",
    link: "https://www.coursera.org/account/accomplishments/verify/T8TTSEQ8HPP2",
    mode: "Online",
  },
  {
    id: "programming-fundamentals",
    title: "Programming Fundamentals",
    issuer: "Coursera (Duke University)",
    date: "May 2023",
    description:
      "Learned core programming concepts, problem-solving techniques, control flow, and algorithmic thinking.",
    link: "https://www.coursera.org/account/accomplishments/verify/PGYKJYV9BU8D",
    mode: "Online",
  },
  {
    id: "salesforce-cert",
    title: "Salesforce Administrator",
    issuer: "Salesforce",
    date: "Dec 2025",
    description:
      "Earned the Salesforce Administrator certification. Certificate PDF is available.",
    link: "/pdf-viewer.html?file=/salesforcecert.pdf",
    mode: "Online",
  },
];

const CertificationCard = ({
  cert,
  index,
  isInView,
}: {
  cert: Certification;
  index: number;
  isInView: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl overflow-hidden group hover:glow-violet transition-shadow"
    >
      {/* Card Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 cursor-pointer"
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-accent" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-mono text-primary">{cert.date}</span>
                <div className="text-xs text-muted-foreground mt-1">{cert.mode}</div>
              </div>
            </div>
          </div>

          {/* Expand Button */}
          <button className="p-2 rounded-lg hover:bg-muted/50 transition-colors">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Verify Certificate
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 text-sm font-mono text-accent mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Credentials Verified
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Certified</span>{" "}
            <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses from leading institutions
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">{">"}</span>
              Additional Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Languages */}
              <div>
                <h4 className="text-sm font-mono text-muted-foreground mb-2">Languages</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Telugu</span>
                    <span className="text-xs text-primary">Native</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">English</span>
                    <span className="text-xs text-muted-foreground">C1 (Proficient)</span>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div>
                <h4 className="text-sm font-mono text-muted-foreground mb-2">Creative Arts</h4>
                <p className="text-sm text-muted-foreground">
                  Digital design and photo editing using Adobe Photoshop and Canva, with a personal interest in photography.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
