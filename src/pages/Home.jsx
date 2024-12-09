import '../assets/css/homePage/home.css'
import { dataProjects } from '../service/data'
import { FaArrowRightLong } from "react-icons/fa6"
import { Link, Outlet } from 'react-router'
import { motion } from 'motion/react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/homePage/AboutMe'

function Home() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV-Carlos_Cruz.pdf';
        link.download = 'Carlos_Cruz_CV.pdf';
        link.click();
    };

    return ( 
        <div className="home sizeScreen background-pages">
            <Outlet />
            <NavBar />
            <AboutMe />
            <motion.div initial={{x: 175}} animate={{x: 0}} transition={{duration: 1}}
            className="section-projects">
                <div className="section-title-projects">
                    <h2 className="title-projects">PROYECTOS</h2>
                    <div className="container-projects">
                        {dataProjects.map(project => (
                            <Link to={`/project/${project.id}`} state={{
                                selectedProject: project,
                                projects: dataProjects,
                            }}
                            key={project.id} className="option-project group">
                                <span className="group-hover:scale-110">{project.name}</span>
                                <FaArrowRightLong className="arrow-icon group-hover:block"/>
                            </Link>  
                        ))}
                    </div>
                </div>
                <div className="container-buttons">
                    <button  onClick={handleDownload} className="button-cv-cert">Descargar CV</button>
                    <Link to="certifications/" className="button-cv-cert">Certificaciones</Link>
                </div>
            </motion.div>
        </div>
    );
}
    
export default Home;
