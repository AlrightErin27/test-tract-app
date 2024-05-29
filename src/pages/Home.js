import "./Home.css"
import evbLogo from "../images/evbLogo.png"
import githubLogo from "../images/githubLogo.png"

export default function Home(){
    return (
        <div className="Home">
            <img src={evbLogo} className="App-evbLogo" alt="evbLogo" />
            <a
            className="App-link-github"
            href="https://github.com/AlrightErin27"
            target="_blank"
            rel="noopener noreferrer"
            >
    
            <img src={githubLogo} className="App-githubLogo" alt="githubLogo" />
            </a>
        </div>
    );
}