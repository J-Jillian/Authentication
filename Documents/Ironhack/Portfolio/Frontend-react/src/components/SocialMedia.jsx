import React from "react";
import {AiFillGithub, AiFillBehanceCircle, AiFillLinkedin} from "react-icons/ai";

const SocialMedia = () => (

    <div className="app__social">
  
        <div>
     <a href="https://github.com/J-Jillian"><AiFillGithub /></a>
          
        </div>

        <div>
          <a href="https://www.behance.net/j-jillian"> <AiFillBehanceCircle /> </a>
        </div>

        <div>
        <a  href="https://www.linkedin.com/in/full-stack-developer-digital-designer-judith"><AiFillLinkedin /></a>
        </div>
        

    </div>
  );

export default SocialMedia;
