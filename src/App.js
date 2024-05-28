
import "./App.css"
import Navbar from "./Navigation/Navbar"

import icon from "./images/icon.png"
import githubIcon from "./images/github.png"


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
    
          <img src={icon} className="App-icon" alt="icon" />
        <a
          className="App-link-github"
          href="https://github.com/AlrightErin27"
          target="_blank"
          rel="noopener noreferrer"
        >
    
          <img src={githubIcon} className="App-githubIcon" alt="github-icon" />
        </a>
      </header>
    </div>
  );
}

export default App;
