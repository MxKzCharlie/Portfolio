import { motion } from "motion/react"
import { useRef, useState } from "react"
import NavBar from "../components/NavBar"
import emailjs from '@emailjs/browser' 
import '../assets/css/contact/contact.css'

function Contact() {
    const form = useRef();
    const [formStatus, setFormStatus] = useState(() => (
        <button type="submit" className="button-submit">
            Enviar
        </button>
    ))

    const handleSendEmail = (event) => {
        event.preventDefault();
        
        setFormStatus(() => (
            <span className="spin-loading"></span>
        ))

        emailjs
            .sendForm('service_q9a7ynj', 'template_qw4krn1', form.current, {
                publicKey: 'KSWAisTV4IEKRYqn9',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormStatus(() => (
                        <span className="correct-shipping">Enviado Correctamente</span>
                    ));
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setFormStatus(() => (
                        <span className="failed-shipment">Correo no enviado</span>
                    ));
                },
            );
    };

    return (  
        <div className="sizeScreen background-pages contact">
            <NavBar />
            <motion.form ref={form} className="form-contact" onSubmit={handleSendEmail} 
            initial={{y: 175}} animate={{y: 0}} transition={{duration: 1}} >
                <h1 className="title-contactme">Contactame</h1>
                <p className="text-contact">¿Interesado en trabajar conmigo? ¡Envíame un mensaje!</p>
                <div className="container-inputs">
                    <label className="labels">
                        Nombre
                        <input placeholder="Tu nombre" type="text" className="inputs" 
                        required name="user_name"/>
                    </label>
                    <label className="labels">
                        Email
                        <input placeholder="tuemail@dominio.com" type="email" className="inputs" 
                        required name="user_email"/>
                    </label>
                </div>
                <label className="labels">
                    Mensaje
                    <textarea name="message" placeholder="Escribe tu mensaje aquí" rows="4" required/>                
                </label>
                {formStatus}
            </motion.form>
        </div>
    );
}

export default Contact;