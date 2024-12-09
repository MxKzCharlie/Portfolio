import '../../assets/css/homePage/certifications.css'
import { Link } from 'react-router'
import { IoClose } from "react-icons/io5"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import HTMLCert from '../../assets/img/HTML-Cert.jpg'
import CSSCert from '../../assets/img/CSS-Cert.jpg'
import JSCert from '../../assets/img/JavaScript-Cert.jpg'
import ReactCert from '../../assets/img/React-Cert.jpg'
import PythonCert from '../../assets/img/Python-Cert.jpg'
import SQLCert from '../../assets/img/SQL-Cert.jpg'
import ScrollToTop from '../../utils/ScrollToTop'

function Certifications() {
    const [xValue, setXValue] = useState(0);
    const valueTranslate = window.innerWidth < 640 ? window.innerWidth : window.innerWidth / 2;
    const handleRight = () => {
        if((-5 * valueTranslate) === xValue){
            return null;
        }
        setXValue(xValue - valueTranslate);
    };
    const handleLeft = () => {
        if(xValue === 0){
            return null;
        }
        setXValue(xValue + valueTranslate);
    };

    console.log(valueTranslate);

    return (  
        <div className="background-opacity">
            <ScrollToTop />
            <motion.div initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: .3}}
            className="certifications-container">
                <div className="interection-buttons">
                    <Link to=".." relative="path" className="button-close">
                        <IoClose className="close-icon"/>
                    </Link>
                    <IoIosArrowBack onClick={handleLeft} className="left-icon"/>
                    <IoIosArrowForward onClick={handleRight} className="right-icon"/>
                </div>
                <motion.div animate={{x: xValue}} 
                className="certifications">
                    <img src={HTMLCert} alt="HTML Certificado" className="certification"/>
                    <img src={CSSCert} alt="CSS Certificado" className="certification" />
                    <img src={JSCert} alt="JavaScript Certificado" className="certification"/>
                    <img src={ReactCert} alt="React Certificado" className="certification" />
                    <img src={PythonCert} alt="Python Certificado" className="certification" />
                    <img src={SQLCert} alt="SQL Certificado" className="certification" />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Certifications;