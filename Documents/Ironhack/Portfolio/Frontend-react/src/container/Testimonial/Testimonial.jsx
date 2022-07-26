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
    <>
      <div className="app__card">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-card"
        >
          <h2 className="head-text">
            <span>ME.</span>
          </h2>
          <p className="p-text">(in short)</p>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Jillian Ramirez
          </h2>
          <p className="bold-text">Web Developer / Digital Designer</p>
          <img src={images.Jillian} />
        </motion.div>
      </div>
      <div className="app__card">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-card"
        >
          <p className="p-text">
            Hi, I am Jillian, an ingenious and quick thinker, really
            enthusiastic, and love to set and accomplish goals.
          </p>
          <br />
          <p className="p-text">
            For Me, the idea of assembling Web Development with Digital Design
            means being capable of shaping all kinds of unspoken desires.
          </p>
          <br />
          <p className="p-text">
            I like to think that one day I will contribute to challenging and
            mean full projects.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__whitebg"
);
