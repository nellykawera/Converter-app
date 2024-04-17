import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to='/'>Distance Converter</Link></li>
                <li><Link to='/mass'>Mass Converter</Link></li>
                <li><Link to='/temperature'>Temperature Converter</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;