import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "./navigation.css";

const Navigation = () => {
  const [navActive, setNavActive] = useState("#header");

  useEffect(() => {
    const handleScroll = (event) => {
      const docsLength = window.scrollY;
      if (docsLength < 500) setNavActive("#header");
      if (docsLength >= 500) setNavActive("#about");
      if (docsLength >= 1200) setNavActive("#experience");
      if (docsLength >= 1800) setNavActive("#contact");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-container">
      <a
        href="#header"
        onClick={() => {
          setNavActive("#header");
        }}
        className={navActive === "#header" ? "navActive" : ""}
      >
        <HomeOutlined spin={navActive === "#header"} />
      </a>
      <a
        href="#about"
        onClick={() => {
          setNavActive("#about");
        }}
        className={navActive === "#about" ? "navActive" : ""}
      >
        <UserOutlined spin={navActive === "#about"} />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setNavActive("#experience");
        }}
        className={navActive === "#experience" ? "navActive" : ""}
      >
        <BookOutlined spin={navActive === "#experience"} />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setNavActive("#contact");
        }}
        className={navActive === "#contact" ? "navActive" : ""}
      >
        <ContactsOutlined spin={navActive === "#contact"} />
      </a>
    </div>
  );
};

export default Navigation;
