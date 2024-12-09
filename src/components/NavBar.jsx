import '../assets/css/navBar.css'
import { Link } from 'react-router'
import ThemeMode from './ThemeMode'

function NavBar() {
    return (  
        <div className="container-navbar">
            <nav className="navbar">
                <ThemeMode />
                <Link to="/" className="option-navbar">Inicio</Link>
                <Link to="/contact/" className="option-navbar">Contacto</Link>
            </nav>
        </div>
    );
}

export default NavBar;