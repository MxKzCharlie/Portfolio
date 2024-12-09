import videoNotesNET from '../assets/video/notesNET.mp4'
import videoCafeRouse from '../assets/video/cafeRouse.mp4'
import videoColortron from '../assets/video/colortron.mp4'

export const dataProjects = [
    {
        id: "notes-net",
        name: "NotesNET",
        url: "https://mxkzcharlieproject.netlify.app/",
        video: videoNotesNET,
        description: `
            Una aplicación web para gestionar notas personales, desarrollada como práctica de integración 
            de frontend y backend. La aplicación permite a los usuarios crear, editar, y eliminar notas, 
            con autenticación de usuario y persistencia de datos.
            Lo que aprendí: Configuración de APIs RESTful, manejo de estado en React, y cómo conectar el 
            frontend con el backend de manera eficiente.
            Problema resuelto: Los usuarios pueden mantener sus notas organizadas en un entorno seguro y 
            accesible desde cualquier dispositivo.`,
        technologies: [
            "React",
            "Tailwindcss",
            "Python",
            "Django",
        ],
    },
    {
        id: "cafe-rouse",
        name: "Café Rouse",
        url: "https://caferouse.com",
        video: videoCafeRouse,
        description: `
            Diseñé y desarrollé una página web responsiva para una cafetería que incluye una tienda en 
            línea con opciones de pedidos personalizados. Implementé funcionalidades como variaciones 
            de productos, métodos de pago en línea con Stripe y notificaciones con Twilio.
            Lo que aprendí: Gestión de integraciones con APIs externas, uso avanzado de componentes React 
            y mejora de la experiencia del usuario en la tienda en línea.
            Problema resuelto: La cafetería ahora tiene un canal digital para gestionar pedidos y pagos, 
            mejorando su alcance y eficiencia operativa.`,
        technologies: [
            "React",
            "Tailwindcss",
            "Express",
            "Node.js",
            "Twilio",
            "Stripe",
        ],
    },
    {
        id: "imprenta-colortron",
        name: "COLORTRON",
        url: "",
        video: videoColortron,
        description: `
            Diseñé y desarrollé una página web informativa y funcional para una imprenta, que destaca 
            los productos y servicios ofrecidos, como etiquetas, volantes, tarjetas, y personalización 
            de productos. La página incluye un slider dinámico para mostrar los productos y una funcion
            para que los usuarios arrastren imagenes a un recuadro y puedan subir sus archivos para
            productos personalizados, y envio de correos al cotizar y comprar un producto. 
            Lo que aprendí: Creación de interfaces responsivas, integración de sliders dinámicos, y 
            manejo de subida de imágenes en aplicaciones web.
            Problema resuelto: La imprenta ahora tiene una plataforma de pedidos en linea, haciendo que
            su negocio llegue mas gente de forma digital y rapida. 
        `,
        technologies: [
            "React",
            "Tailwindcss",
            "Express",
            "Node.js",
            "Stripe",
        ],
    },
]