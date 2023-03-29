import React from "react";
import "./experience.css";
import { CheckCircleOutlined } from "@ant-design/icons";

const Experience = () => {
  return (
    <div className="exp-container" id="experience">
      <h5>What Skills I Have</h5>
      <h1 className="text-[#128f6c]">My Experience</h1>
      <div className="exp-card">
        <div className="exp-frontend">
          <h3>Frontend Deverloper</h3>
          <div className="exp-content">
            <div className="exp-detail">
              <CheckCircleOutlined className="exp-detail__icon" />
              <div>
                <h4>HTML</h4>
                <p className="text-light">Experienced</p>
              </div>
            </div>
            <div className="exp-detail">
              <CheckCircleOutlined className="exp-detail__icon" />
              <div>
                <h4>CSS</h4>
                <p className="text-light">Intermediate</p>
              </div>
            </div>
            <div className="exp-detail">
              <CheckCircleOutlined className="exp-detail__icon" />
              <div>
                <h4>JavaScript</h4>
                <p className="text-light">Experienced</p>
              </div>
            </div>
            <div className="exp-detail">
              <CheckCircleOutlined className="exp-detail__icon" />
              <div>
                <h4>Ant Design</h4>
                <p className="text-light">Experienced</p>
              </div>
            </div>
            <div className="exp-detail">
              <CheckCircleOutlined className="exp-detail__icon" />
              <div>
                <h4>Tailwind Css</h4>
                <p className="text-light">Experienced</p>
              </div>
            </div>
            <div className="exp-detail">
              <CheckCircleOutlined className="exp-detail__icon" />
              <div>
                <h4>React</h4>
                <p className="text-light">Experienced</p>
              </div>
            </div>
          </div>
        </div>

        <div className="exp-backend">
          <h3>Backend Deverloper</h3>
          <div className="exp-content">
            <div className="exp-detail">
              <CheckCircleOutlined className="exp-detail__icon" />
              <div>
                <h4>Node JS</h4>
                <p className="text-light">Experienced</p>
              </div>
            </div>
            <div className="exp-detail">
              <CheckCircleOutlined className="exp-detail__icon" />
              <div>
                <h4>MongoDB</h4>
                <p className="text-light">Experienced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
