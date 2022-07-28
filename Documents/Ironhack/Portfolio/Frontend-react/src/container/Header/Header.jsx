import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";


import "./Header.scss";

const scaleVariants = {
  whileView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <h1 className="app__header-title" >
        <span> ...Portfolio</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
