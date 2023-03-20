import React, { useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "./navigation.css";

const Navigation = () => {
  const [navActive, setNavActive] = useState("#contact");

  return (
    <nav>
      <a
        href="#header"
        onClick={() => {
          console.log(navActive);
          setNavActive("#header");
        }}
        className={navActive === "#header" ? "navActive" : ""}
      >
        <HomeOutlined spin={navActive === "#header"} />
      </a>
      <a
        href="#about"
        onClick={() => {
          console.log(navActive);
          setNavActive("#about");
        }}
        className={navActive === "#about" ? "navActive" : ""}
      >
        <UserOutlined />
      </a>
      <a
        href="#experience"
        onClick={() => {
          console.log(navActive);
          setNavActive("#experience");
        }}
        className={navActive === "#experience" ? "navActive" : ""}
      >
        <BookOutlined />
      </a>
      <a
        href="#contact"
        onClick={() => {
          console.log(navActive);
          setNavActive("#contact");
        }}
        className={navActive === "#contact" ? "navActive" : ""}
      >
        <ContactsOutlined />
      </a>
    </nav>
  );
};

export default Navigation;
