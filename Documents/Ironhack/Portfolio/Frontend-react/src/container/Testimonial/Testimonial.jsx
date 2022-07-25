import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";
import { urlFor, client } from "../../client";

const Testimonial = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div >
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="app__profile-testimonal"
      >
        <div app__testimonial-item>
          <h2 className="head-text">
            <span>ME.</span>
          </h2>
          <p className="p-text">(in short)</p>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Jillian Ramirez
          </h2>
          <p className="bold-text">Web Developer / Digital Designer</p>
          <img src={images.Jillian} />
        </div>
      </motion.div>


      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <p className="p-text app_text">
          Hi I am Jillian, An animal lover, and a really creative person. I
          tend to be a quick thinker, ambitious, adaptable, and enthusiastic, I
          generally love to set and accomplish goals. I Have a Digital design
          background with three years of experience in this field. My First-year
          working as a digital designer was in Mexico where I am from. I Have
          always loved to practice my English as well as learn from different
          cultures. So I decided to do a cultural exchange for a year and a
          half in the US. Later I moved to Spain, looking to specialize in a
          design area. And continuing with my career, I was still not clear
          where to specialize myself in. So I decided to keep on working for
          two years as a digital designer until I finally  decided to specialize
          in web development, since I like to get into tech which will also
          allow me to create any project I could imagine. I recently concluded a
          new stage, Being in a Fullstack developer Bootcamp full time was
          intellectually challenging, and significant for my training. I feel
          really proud of myself, I'm really excited to start working in Tech
          word as a Fullstack Developer. My goal is to be part of a team where I
          can keep learning and grow as an IT professional. All the time I am
          constantly evolving, updating, and learning.
        </p>
      </motion.div>
      
    </div>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__whitebg"
);
