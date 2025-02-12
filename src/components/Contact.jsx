import '../assets/css/contact.css'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react'

function Contact() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(() => (
        <button type="submit" className="button-contact">
            Enviar
        </button>
    ));

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(() => (
            <span className="loading loading-dots loading-lg"></span>
        ));

        emailjs.sendForm('service_q9a7ynj', 
            'template_qw4krn1', 
            formRef.current, 
            'KSWAisTV4IEKRYqn9'
        )
        .then((result) => {
            console.log("Corrreo enviado correctamente", result.text);
            setLoading(() => (
                <span className="text-green-500 font-general">
                    Enviado Correctamente
                </span>
            ));
        })
        .catch((error) => {
            console.log("Error al enviar el correo", error.text);
            alert("Error al enviar el mensaje");
        });

    };

    return (  
        <div id="contacto" className="contact">
            <motion.form initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit} ref={formRef} className="container-form">
                <h2 className="title-contact">Contactame</h2>
                <p className="little-text">¿Interesado en trabajar conmigo?<br /> ¡Envíame un mensaje!</p>
                <div className="container-inputs">
                    <label name="name" className="labels-contact">
                        Nombre
                        <input name="user_name" type="text" className="inputs-contact" required/>
                    </label>
                    <label name="email" className="labels-contact">
                        Email
                        <input name="user_email" type="email" className="inputs-contact" required/>
                    </label>
                    <label name="message" className="labels-contact">
                        Mensaje
                        <textarea name="message" aria-setsize={false} className="textarea-contact" required/>
                    </label>
                </div>
                {loading}
            </motion.form> 
        </div>
    );
}

export default Contact;