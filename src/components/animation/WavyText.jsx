import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WavyText = (props) => {
    // eslint-disable-next-line react/prop-types
  const { text, delay = 0, duration = 0.05, classes, ...restProps } = props;
  const letters = Array.from(text);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, margin: "-100px 0px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  return (
    <motion.h1
      ref={sectionRef}
      style={{ display: "flex",  }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={classes}
      {...restProps}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;
