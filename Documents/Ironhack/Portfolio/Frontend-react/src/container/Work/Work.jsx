import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { animate, motion } from "framer-motion";

import { useState } from "react";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setfactiveFilter] = useState("All");
  const [animatedCard, setanimatedCard] = useState({y:0, opacity: 1});

  const handleWorkFilter = (item) => {};

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {["React App", "Vanilla JavaScript App", "Api App", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
      animate={animatedCard}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className='app__work-portfolio'
      >

      </motion.div>
    </>
  );
};

export default Work;
