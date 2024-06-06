import "./Home.css";
import evbLogo from "../images/EvbLogoTransparent.png";
import githubLogo from "../images/githubLogo.png";

export default function Home() {
  return (
    <div className="Home">
      <div className="logo-wrap">
        <img src={evbLogo} className="App-evbLogo" alt="evbLogo" />
        <h1 className="dev">DEV</h1>

        <a
          className="App-link-github"
          href="https://github.com/AlrightErin27"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} className="App-githubLogo" alt="githubLogo" />
        </a>
      </div>
    </div>
  );
}
