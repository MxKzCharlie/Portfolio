import '../../assets/css/homePage/aboutMe.css'
import { motion } from 'motion/react'
import SocialSection from '../../components/homePage/SocialSection'

function AboutMe() {
    return (  
        <motion.div initial={{x: -175}} animate={{x:0}} transition={{duration: 1}}
        className="aboutMe">
            <div className="container-title">
                <h1 className="title">REACT<br/>DEVELOPER</h1>
            </div>
            <div className="container-info-social">
                <SocialSection />
                <div className="info-aboutMe">
                    <p className="info">
                        Soy Carlos Cruz, desarrollador web especializado en React y tecnologías 
                        modernas como Node.js y Django. Mi misión es crear soluciones digitales 
                        funcionales y atractivas que simplifiquen la vida de las personas y potencien 
                        a las empresas. Ofrezco calidad, atención al detalle y un enfoque personalizado 
                        en cada proyecto.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default AboutMe;