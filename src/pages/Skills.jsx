import { useEffect, useState } from "react";
import FSA from "../components/experience/FSA";
import SIG from "../components/experience/SIG";
import "./Experience.css";

const Skills = () => {
  const [fsa, setFSA] = useState(true);
  const [bloomberg, setBloomberg] = useState(false);
  const [sig, setSIG] = useState(false);

  const handleFSAClick = () => {
    setFSA(true);
    setSIG(false);
  };

  const handleBloombergClick = () => {
    setFSA(false);
    setSIG(false);
  };

  const handleSIGClick = () => {
    setSIG(true);
    setFSA(false);
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });

  return (
    <div className="experience-container">
      <p className="experience-header">Skills</p>
      <div className="experience-terminal-container">
        <div className="experience-terminal-header">
          <div className="header-btns">
            <div className="header-btn header-btn1"></div>
            <div className="header-btn header-btn2"></div>
            <div className="header-btn header-btn3"></div>
          </div>
          <div className="header-text">
            <p>Gnanesh-portfolio</p>
          </div>
        </div>
        <div className="terminal-body">
          <div className="terminal-bg-text">
            <p>Gnanesh:Skills Gnanesh-portfolio$ ls</p>
            <div className="experience-terminal-btns">
              <button
                onClick={handleFSAClick}
                className="experience-terminal-btn terminal-btn1"
              >
                cat FSA.txt/ &#8594;
              </button>
              <button
                onClick={handleSIGClick}
                className="experience-terminal-btn terminal-btn3"
              >
                cat UI/UX.txt/ &#8594;
              </button> 
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-experience-text">
              {fsa && <FSA />}
              {bloomberg && <Bloomberg />}
              {sig && <SIG />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
