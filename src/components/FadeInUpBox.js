// source: 
// * article: https://betterprogramming.pub/framer-motion-tutorials-make-more-advanced-animations-4344b686ea0a
// * sandbox: https://codesandbox.io/s/framer-motion-fade-in-up-scale-k1crp?from-embed=&file=/ui/atoms/fade-in-up-box/index.jsx


import React, { useContext, useMemo, useState, useEffect } from "react";

// import { IntersectionContext } from "../components/IntersectionObserver";
import { motion } from "framer-motion";

export const FadeInUpBox = ({
  children,
  yOffset = 24, // y initial position
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" |
  //  "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  // "backInOut" | "anticipate" | EasingFunction;
  delayOrder, // order of appearance
  ...rest
}) => {
  // const { inView } = useContext(IntersectionContext);
  const [delay, setDelay] = useState(2.25);

  const offset = 0.4; 

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * offset);
  }, [delayOrder, offset]);

    // const timer = setTimeout(() => {
    //   setDelay(false);
    // }, 2000);
    // return () => clearTimeout(timer);

// from FadeInChar
//   const container = {
//     hidden: { opacity: 0 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       transition: { staggerChildren: 0.03, delayChildren: 2.0 * i },
//     }),
//   };

  const transition = useMemo(
    () => ({
      duration: 0.05,
      type: "spring",
      damping: 18,
      stiffness: 100,
      delay,
      ease: easing,
      staggerChildren: 10, 
      delayChildren: 2.0 * 1,
    }),
    [delay, easing]
  );

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition
    }
  };

  return (
    <motion.div
      initial="hidden"
      // animate={inView ? "show" : "hidden"}
      animate="show"
      exit="hidden"
      variants={variants}
      {...rest}
    >
      {children} 
      {/* {inView} */}
    </motion.div>
  );
};
