import notesNetImg from '../assets/img/notesNET.png'
import cafeRouseImg from '../assets/img/cafeRouse.png'
import colortronImg from '../assets/img/colortron.png'
import temporaryImg from '../assets/img/whitout-project.png'

export const dataReactProj = [
    {
        id: "notes-net",
        name: "NotesNET",
        urlSite: "https://mxkzcharlieproject.netlify.app/",
        img: notesNetImg,
        description: `
            Aplicación web de notas con autenticación y persistencia de datos. 
            Aprendí APIs RESTful, manejo de estado en React y conexión eficiente 
            frontend-backend. Soluciona la organización de notas accesibles desde 
            cualquier dispositivo.`,
        time: .5, 
    },
    {
        id: "cafe-rouse",
        name: "Café Rouse",
        urlSite: "https://caferouse.com",
        img: cafeRouseImg,
        description: `
            Diseñé y desarrollé una tienda en línea responsiva con 
            pedidos personalizados, pagos con Stripe y notificaciones 
            con Twilio. Aprendí integración de APIs, React avanzado 
            y UX en e-commerce. Soluciona la gestión digital de pedidos 
            y pagos, mejorando alcance y eficiencia.`,
        time: 1, 
    },
    {
        id: "imprenta-colortron",
        name: "COLORTRON",
        urlSite: "https://colortron-frontend-project.netlify.app",
        img: colortronImg,
        description: `
            Creé una web informativa con slider dinámico, subida de 
            imágenes y envío de cotizaciones. Aprendí UI responsiva, 
            integración de sliders y manejo de archivos. Soluciona la 
            digitalización de pedidos, ampliando el alcance del negocio.`,
        time: 1.5, 
    },
]

export const dataWordPressProj = [
    {
        id: "proyecto-1",
        name: "Proyecto 1",
        urlSite: "https://www.google.com",
        img: temporaryImg,
        description: "Proximamente...",
        time: .5, 
    },
    {
        id: "proyecto-2",
        name: "Proyecto 2",
        urlSite: "https://www.google.com",
        img: temporaryImg,
        description: "Proximamente...",
        time: 1, 
    },
    {
        id: "proyecto-3",
        name: "Proyecto 3",
        urlSite: "https://www.google.com",
        img: temporaryImg,
        description: "Proximamente...",
        time: 1.5, 
    },
];