const Navbar = ({toggle , setToggle}) => {
    return (
        <nav className="navbar" style={{left: toggle && "0"}}>
            <ul className="navbar-links">
                <li className="navbar-link" onClick={()=> setToggle(false)}>Home</li>
                <li className="navbar-link" onClick={()=> setToggle(false)}>Authors</li>
                <li className="navbar-link" onClick={()=> setToggle(false)}>About Us</li>
                <li className="navbar-link" onClick={()=> setToggle(false)}>Contact Us</li>
                <li className="navbar-link" onClick={()=> setToggle(false)}>Register</li>
            </ul>
        </nav>
    );
}
export default Navbar;
