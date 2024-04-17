const FSA = () => {
  return (
    <>
      <div className="experience fsa">
        {/* <p className="experience-role"></p> */}
        <p className="experience-company-fsa">Fullstack Skills</p>
        <div className="experience-description">
          <ul>
            <li>
              Immersive 4-week program for Full-stack web development utilizing
              the MERN stack.
            </li>
            <li>
              Front end development: JavaScript, CSS, HTML, React, vite
              (toolkit)
              <br></br>
              Back end development: Node.js and APIs
              <br></br>
              Data Systems: MySQL,MongoDB.
            </li>
            <li>
              Object Oriented Programming, full-stack applications, Single-Page
              Applications
            </li>
            <li>
              Expertise in developer tools & debugging: Git, Visual Studio
              Code, Chrome Developer Tools , Sublime.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/node.png" alt="node logo" />
          <img src="/toolkit-logos/express.png" alt="express logo" />
          <img src="/toolkit-logos/react.png" alt="react logo" />
          <img src="/toolkit-logos/postgres.png" alt="postgres logo" />
        </div>
      </div>
    </>
  );
};

export default FSA;
