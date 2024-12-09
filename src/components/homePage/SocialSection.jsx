import '../../assets/css/homePage/socialSection.css'
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { linkIg, linkGit, linkWhats } from '../../utils/links'
import { Link } from 'react-router'

function SocialSection() {
    return (  
        <section className="socialSection">
            <Link to={linkIg} target="_blank"><FaInstagram className="social-icon" /></Link>
            <Link to={linkGit} target="_blank"><FaGithub className="social-icon" /></Link>
            <Link ><FaLinkedin className="social-icon" /></Link>
            <Link to={linkWhats} target="_blank"><FaWhatsapp className="social-icon" /></Link>
        </section>
    );
}

export default SocialSection;