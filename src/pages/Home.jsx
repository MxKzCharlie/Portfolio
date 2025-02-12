import '../assets/css/home.css'
import elipse from '../assets/img/Ellipse-33.png'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import RightsReserved from '../components/RightsReserved'
import { TbBrandFiverr } from "react-icons/tb"
import { SiUpwork } from "react-icons/si"
import { IoStarSharp } from "react-icons/io5";
import { Link } from 'react-router'
import { linkFi } from '../utils/links'
import { motion } from 'motion/react'

function Home() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV-Carlos_Cruz.pdf';
        link.download = 'Carlos_Cruz_CV.pdf';
        link.click();
    };

    return (
        <>
            <NavBar />
            <div className="home">
                <motion.div initial={{x: -100, opacity: 0}} 
                animate={{x: 0, opacity: 1}} 
                transition={{duration: 1.5}}
                className="container-text">
                    <h1 className="title-profession">Web<br />Developer</h1>
                    <div className="social-work-cv">
                        <div className="social-work">
                            <div className="stars">
                                <IoStarSharp className="icon-star"/>
                                <IoStarSharp className="icon-star"/>
                                <IoStarSharp className="icon-star"/>
                                <IoStarSharp className="icon-star"/>
                                <IoStarSharp className="icon-star"/>
                            </div>
                            <Link to={linkFi} target="_blank">
                                <TbBrandFiverr className="icons-social-work"/>
                            </Link>
                            <Link to={linkFi} target="_blank">
                                <SiUpwork className="icons-social-work"/>
                            </Link>
                        </div>
                        
                        <button onClick={handleDownload} className="button-cv">Descargar CV</button>
                    </div>
                </motion.div>
                <motion.div initial={{x: 100, opacity: 0}} 
                animate={{x: 0, opacity: 1}} 
                transition={{duration: 1.5}} 
                className="container-imgs">
                    <div className="container-img-decoration bg-decoration"></div>
                    <img className="img-lightness-blue" src={elipse} alt="lightness-blue" />
                </motion.div>
            </div>
            <AboutMe />
            <Projects />
            <Contact />
            <RightsReserved />
        </> 
    );
}
    
export default Home;
