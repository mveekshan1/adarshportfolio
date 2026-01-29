import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  delayBetween?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterText = ({
  texts,
  speed = 50,
  delayBetween = 1500,
  className = "",
  onComplete,
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const fullText = texts[currentTextIndex];

    if (!isDeleting && currentText === fullText) {
      // Finished typing current text
      if (currentTextIndex === texts.length - 1) {
        setIsComplete(true);
        onComplete?.();
        return;
      }
      
      setTimeout(() => setIsDeleting(true), delayBetween);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, delayBetween, isComplete, onComplete]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  );
};
