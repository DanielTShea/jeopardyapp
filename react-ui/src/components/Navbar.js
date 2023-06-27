import { Link } from 'react-router-dom';
const Navbar = () =>{

    return(
        <nav className="navbar">
            <h1>Jeopardy</h1>
            <div>
                <Link to="/">Home </Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                <Link to="/newgame">New Game</Link>
            </div>
        </nav>
    );

}

export default Navbar;