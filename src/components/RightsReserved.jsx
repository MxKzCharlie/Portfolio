import { Link } from "react-router"

function RightsReserved() {
    return ( 
        <div className="w-full h-auto bg-white flex justify-center text-center text-xs py-4
        sm:text-base sm:py-2">
            <p className="text-gray-500 font-general">
                Derechos Reservados 2025. 
                <span className="text-blue-500 hover:underline"> <Link>Politica de Privacidad</Link></span>
            </p>
        </div>
    );
}

export default RightsReserved;