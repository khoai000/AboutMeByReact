import React, { useEffect, useState } from "react";
import CV from "../../assets/cv.pdf";
import ME from "../../assets/avt.jpg";
import "./header.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Header = () => {
  const [text, setText] = useState("Nguyen Hai Duong");

  useEffect(() => {
    let words = ["Nguyễn Hải Dương", "Frontend Deverloper"],
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 15,
      speed = 70;
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
    <header className="container flex flex-col items-center" id="header">
      <h5 className="mt-16 mb-1 text-lg">Hello I'm</h5>
      <div className="h-16">
        <h1 className="text-neon text-4xl">{text}</h1>
      </div>
      <div className="flex flex-row gap-10" >
        <a href={CV} className="btn mt-4" download={true}>
          Download CV
        </a>
        <a href="#contact" className="btn2 mt-4">
        Contact Me
        </a>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col -ml-28 mr-20 mt-56 gap-10">
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
    </header>
  );
};

export default Header;
