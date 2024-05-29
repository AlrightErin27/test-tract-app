import "./styles.css"

export default function Navbar(){
    
    return <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
            <CustomLink href="/tic-tac-toe">Tic-Tac-Toe</CustomLink>
            <CustomLink href="/game">Game</CustomLink>
        </ul>
    </nav>

}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname;
    // console.log(path);
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}