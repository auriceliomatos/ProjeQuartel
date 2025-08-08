
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-red-900 text-white py-4 font-serif">
            <div className="container mx-auto text-center flex items-center justify-center ">
                <p className="text-sm ml-4">
                    &copy; 2023 Corpo de Bombeiros Militar do Ceará / Crateús. Todos os direitos reservados.
                </p>
                <p className="text-sm ml-4">
                    Desenvolvido por <a href="https://github.com/auriceliomatos" target="_blank" rel="noopener noreferrer" className="text-whitehover:underline hover:text-gray-800">Auricélio Matos</a>
                </p>
                <p className="text-sm ml-2">
                    <a href="https://github.com/auriceliomatos" target="_blank" rel="noopener noreferrer" className="text-white hover:underline hover:text-gray-800">
                        <FaGithub size={20} />
                    </a>
                </p>
            </div>
        </footer>
    );
};