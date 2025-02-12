import '../assets/css/projects.css'
import { useState } from 'react'
import { dataReactProj, dataWordPressProj } from '../service/data'
import { TbExternalLink } from "react-icons/tb"
import { Link } from 'react-router'
import { motion } from 'motion/react'

function Projects() {
    const [activeTab, setActiveTab] = useState(0);
    const [dataCards, setDataCards] = useState(dataReactProj);
    const handleTab = (i) => {
        setActiveTab(i);
        if (i === 0) {
            setDataCards(dataReactProj);
        } else {
            setDataCards(dataWordPressProj);
        }
    };

    return (  
        <div id="proyectos" className="projects">
            <h2 className="title-projects">Proyectos</h2>
            <div className="options-type-projects">
                <p onClick={() => handleTab(1)} 
                className={`option-type ${activeTab === 1 ? 'active-tab' : ''}`}>WordPress</p>
                <p onClick={() => handleTab(0)} 
                className={`option-type ${activeTab === 0 ? 'active-tab' : ''}`}>React</p>
            </div>
            <div className="container-cards">
                {dataCards.map((project, i) => (
                    <motion.div initial={{ opacity: 0 , y: 100}} whileInView={{opacity: 1, y: 0}} 
                    transition={{duration: project.time}}
                    className="card-project" key={project.id}>
                        <Link className="link-page-project" to={project.urlSite} target="_blank">
                            <TbExternalLink className="w-full h-full text-white"/>
                        </Link>
                        <div className="container-info-project">
                            <h3 className="title-project">{project.name}</h3>
                            <div className="description-project">
                                <p>{project.description}</p>
                            </div>
                        </div>
                        <img src={project.img} alt="notesNET" className="img-card"/>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;