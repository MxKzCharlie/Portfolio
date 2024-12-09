import { motion } from "motion/react"
import NavBar from "../components/NavBar"
import '../assets/css/contact/contact.css'

function Contact() {
    return (  
        <div className="sizeScreen background-pages contact">
            <NavBar />
            <motion.form initial={{y: 175}} animate={{y: 0}} transition={{duration: 1}} 
            className="form-contact">
                <h1 className="title-contactme">Contactame</h1>
                <p className="text-contact">¿Interesado en trabajar conmigo? ¡Envíame un mensaje!</p>
                <div className="container-inputs">
                    <label className="labels">
                        Nombre
                        <input placeholder="Tu nombre" type="text" className="inputs" 
                        required />
                    </label>
                    <label className="labels">
                        Email
                        <input placeholder="tuemail@dominio.com" type="email" className="inputs" 
                        required />
                    </label>
                </div>
                <label className="labels">
                    Mensaje
                    <textarea placeholder="Escribe tu mensaje aquí" rows="6"/>                
                </label>
            </motion.form>
        </div>
    );
}

export default Contact;