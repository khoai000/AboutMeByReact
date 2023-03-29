import React, { useEffect, useState } from "react";
import CV from "../../assets/Nguyễn Hải Dương - CV Frontend Dev.pdf";
import ME from "../../assets/IMG_0489.JPG";
import "./header.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Header = () => {
  const [text, setText] = useState("Nguyễn Hải Dương");

  useEffect(() => {
    let words = ["Nguyễn Hải Dương", "Frontend Deverloper"],
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 15,
      speed = 85;
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      let part = words[i].substring(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setText(part);
    }, speed);
  }, []);

  return (
    <div className="header-container" id="header">
      <h5>Hello I'm</h5>
      <div className="sm:h-16 h-8">
        <h1 className="text-neon">{text}</h1>
      </div>
      <div className="btn-container">
        <a href={CV} className="btn mt-4" download={true}>
          Download CV
        </a>
        <a href="#contact" className="btn2 mt-4">
          Contact Me
        </a>
      </div>
      <div className="box-media">
        <div className="app-container">
          <a href="https://www.facebook.com/canhcut.dl/">
            <FacebookOutlined className="app-icon" />
          </a>
          <a href="https://www.instagram.com/_hduon21/">
            <InstagramOutlined className="app-icon" />
          </a>
          <a href="https://github.com/khoai000">
            <GithubOutlined className="app-icon" />
          </a>
        </div>
        <img src={ME} alt="me" className="me" />
      </div>
    </div>
  );
};

export default Header;
