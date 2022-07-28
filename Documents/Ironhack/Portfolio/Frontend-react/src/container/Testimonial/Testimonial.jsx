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
          <h2 className="head-h3-text">
            <span>ME</span>
          </h2>
          <p className="p-text">(in short)</p>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Jillian Ramirez
          </h2>
          <p className="p-text">Web Developer  |  Digital Designer</p>
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
          Hi, it's Jillian. I am a Mexican ingenious Web Dev & Designer. First of all, thank you for reading my Portfolio, it's such a pleasure to have you here!
          </p>
          <br />
          <p className="p-text">
          A couple of words about my professional life:  After obtaining my Bachelor's degree in Digital Design, I gained experience in a wide range of design disciplines from startups based in Málaga, where I used Adobe Creative Suite software intensively during both my professional life and spare time. For a few years for me, the idea of assembling Web Development with Digital Design was exciting, a path that would make me be capable of shaping all kinds of unspoken desires, which eventually led me to study Computer Software Engineering Bootcamp at Ironhack. 
          </p>
          <br />
          <p className="p-text">
          I like to think that one day I will contribute to challenging and mean full companies to create a positive impact on the world.
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
