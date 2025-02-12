import '../assets/css/aboutMe.css'
import photo from '../assets/img/photoPerfil.jpg'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"
import { linkGit, linkIg, linkIn } from '../utils/links'
import { Link } from 'react-router'
import { motion } from 'motion/react'

function AboutMe() {
    return (  
        <motion.div initial={{opacity: 0}}
        whileInView={{opacity: 1}} transition={{duration: 1.5}} 
        className="aboutMe" id="acerca-de-mi">
            <h2 className="title-aboutMe">Acerca De Mí</h2>
            <motion.div initial={{x: -100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}} transition={{duration: 1.5}}
            className="container-photo">
                <img className="photo" src={photo} alt="photo-de-perfil"/>
            </motion.div>
            <motion.div initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}} transition={{duration: 1.5}}
            className="container-description">
                <p className="description">
                    Soy Carlos Cruz, desarrollador web especializado en React, WordPress y 
                    tecnologías modernas como Node.js y Django. Mi misión es crear soluciones 
                    digitales funcionales y atractivas que simplifiquen la vida de las personas 
                    y potencien a las empresas. Ofrezco calidad, atención al detalle y un enfoque 
                    personalizado en cada proyecto. Soy un apasionado a la música en general, 
                    me gusta jugar futbol y valorant.
                </p>
            </motion.div>
            <div className="social-media">
                <Link to={linkIg} target="_blank"><FaInstagram className="icons-media"/></Link>
                <Link to={linkGit} target="_blank"><FaGithub className="icons-media"/></Link>
                <Link to={linkIn} target="_blank"><FaLinkedin className="icons-media"/></Link>
            </div>
        </motion.div>
    );
}

export default AboutMe;