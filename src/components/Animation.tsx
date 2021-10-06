import { motion, Transition, Variants } from "framer-motion";
import React from "react";
const ani: { variants: Variants; transition: Transition }[] = [
  {
    variants: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    transition: { type: "spring" },
  },
  {
    variants: {
      initial: { opacity: 0, x: 200 },
      animate: { opacity: 1, x: 0 },
    },
    transition: { type: "spring", bounce: 100 },
  },
  {
    variants: {
      initial: { opacity: 0, y: -100, x: 200 },
      animate: { opacity: 1, y: 0, x: 0 },
    },
    transition: { type: "spring", bounce: 100 },
  },
  {
    variants: {
      initial: { opacity: 0, y: -100, x: 200 },
      animate: { opacity: 1, y: 0, x: 0 },
    },
    transition: { type: "spring", bounce: 100 },
  },
];
export const Animation: React.FunctionComponent<{
  t: number | undefined;
  a: number;
}> = ({ children, t = 400, a }) => {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      initial="initial"
      animate="animate"
      variants={ani[a].variants}
      transition={{ duration: t, ...ani[a].transition }}
    >
      {children}
    </motion.div>
  );
};
