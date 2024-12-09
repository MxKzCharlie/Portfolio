import '../assets/css/projectViewer/projectViewer.css'
import { SiTailwindcss, SiDjango, SiExpress, SiStripe,
        SiReact, SiPython, SiNodedotjs, SiTwilio } from "react-icons/si"
import { IoIosLink } from "react-icons/io"
import { Link, useLocation } from 'react-router'
import { motion } from 'motion/react'
import NavBar from '../components/NavBar'
import ScrollToTop from '../utils/ScrollToTop'

function ProjectViewer() {
    let technologiesList = [];
    let projectsList = [];
    const {state, pathname} = useLocation();
    const project = state.selectedProject;
    const projects = state.projects;
    const idLocation = pathname.split("/")[2];
    projects.forEach(project => {
        if(project.id !== idLocation){
            projectsList.push(project);
        }
    });
    console.log(projectsList);

    project.technologies.forEach(technologie => {
        switch (technologie){
            case 'React':
                technologiesList.push([technologie, <SiReact className="icon-technologie" />]);
                break;
            case 'Tailwindcss':
                technologiesList.push([technologie, <SiTailwindcss className="icon-technologie" />]);
                break;
            case 'Python':
                technologiesList.push([technologie, <SiPython className="icon-technologie" />]);
                break;
            case 'Django':
                technologiesList.push([technologie, <SiDjango className="icon-technologie" />]);
                break;
            case 'Express':
                technologiesList.push([technologie,  <SiExpress className="icon-technologie" />]);
                break;
            case 'Node.js':
                technologiesList.push([technologie, <SiNodedotjs className="icon-technologie" />]);
                break;
            case 'Twilio':
                technologiesList.push([technologie, <SiTwilio className="icon-technologie" />]);
                break;
            case 'Stripe':
                technologiesList.push([technologie, <SiStripe className="icon-technologie" />]);
                break;
            default:
                technologiesList.push([technologie, <div></div>]);
                break;
        }
    })

    return (  
        <div className="background-pages sizeScreen projectViewer">
            <ScrollToTop />
            <NavBar />
            <motion.div initial={{x: -175}} animate={{x: 0}} transition={{duration: 1}}
            className="video-technologies-section">
                <h1 className="title-project">{project.name}</h1>
                <video className="video-project" autoPlay loop muted src={project.video} />
                <h2 className="technologies">Tecnologías</h2>
                <div className="container-icons-technologies">
                    {
                        technologiesList.map(technologie => (
                            <div key={technologie[0]} className="tooltip-custom" data-tip={`${technologie[0]}`}>
                                {technologie[1]}
                            </div>
                        ))
                    }
                </div>
            </motion.div>
            <motion.div initial={{x: 175}} animate={{x: 0}} transition={{duration: 1}}
            className="description-projects-section">
                <p className="description-project">{project.description}</p>
                <Link to={project.url} target="_blank" className="links-project">
                    <IoIosLink className="text-secondary w-auto h-5/6"/>    
                    Visitar Página
                </Link>
                <div className="container-links-projects">
                    <h2 className="subtitle-other-projects">Otros Proyectos</h2>
                    <div className="other-projects">
                        {
                            projectsList.map(project => (
                                <Link to={`/project/${project.id}`} state={{
                                    selectedProject: project,
                                    projects: projects,
                                }}
                                className="link-to-project">
                                    <p className="name-project">{project.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ProjectViewer;