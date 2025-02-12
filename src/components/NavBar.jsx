import '../assets/css/navBar.css'

function NavBar() {
    return (  
        <div className="navBar">
            <a href="#acerca-de-mi" className="options-navBar">Acerca de Mi</a>
            <a href="#proyectos" className="options-navBar">Proyectos</a>
            <a href="#contacto" className="options-navBar">Contacto</a>
        </div>
    );
}

export default NavBar;