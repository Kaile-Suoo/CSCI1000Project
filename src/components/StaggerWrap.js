// source code: https://codesandbox.io/s/framer-motion-fade-in-up-scale-k1crp?from-embed=&file=/ui/atoms/stagger-wrap/index.jsx:0-938

import React, { useContext } from "react";

// import { IntersectionContext } from "../components/IntersectionObserver";
// import { MotionBox } from "../motion-box";
import { motion } from "framer-motion";
import styles from "../styles/Avery.module.css";

export const StaggerContext = React.createContext({
  stagger: false,
});

export const StaggerWrap = ({ children, delayOrder, childrenDelay, ease }) => {
  // const { inView } = useContext(IntersectionContext);

  // const offset = 0.4;

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delay: delayOrder ? delayOrder : 0,
        staggerChildren: childrenDelay ? childrenDelay : 0.1,
      },
    },
  };

  return (
    <StaggerContext.Provider value={{ stagger: true, ease }}>
      <motion.div
        initial="hidden"
        // animate={inView ? "show" : "hidden"}
        animate="show"
        exit="hidden"
        variants={variants}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
};
