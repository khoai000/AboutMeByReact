import React, { useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "./navigation.css";

const Navigation = () => {
  const [navActive, setNavActive] = useState("#header");

  return (
    <nav
      ref={(el) => {
        if (!el) return;
        console.log("initial height", el.getBoundingClientRect().height);
        let prevValue = JSON.stringify(el.getBoundingClientRect());
        const start = Date.now();
        const handle = setInterval(() => {
          let nextValue = JSON.stringify(el.getBoundingClientRect());
          if (nextValue === prevValue) {
            clearInterval(handle);
            console.log(
              `width stopped changing in ${Date.now() - start}ms. final width:`,
              el.getBoundingClientRect().height
            );
          } else {
            prevValue = nextValue;
          }
        }, 100);
      }}
    >
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
        <UserOutlined />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setNavActive("#experience");
        }}
        className={navActive === "#experience" ? "navActive" : ""}
      >
        <BookOutlined />
      </a>
      <a
        href="#contact"
        onClick={() => {
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
