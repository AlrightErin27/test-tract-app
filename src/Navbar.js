import { Link } from "react-router-dom"
import "./styles.css"

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" >Home</Link>
        <ul>
            <CustomLink to="/tic-tac-toe">Tic-Tac-Toe</CustomLink>
            <CustomLink to="/game">Game</CustomLink>
        </ul>
    </nav>

}

function CustomLink({to, children, ...props}){
    const path = window.location.pathname;
    // console.log(path);
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}