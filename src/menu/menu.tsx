import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { HiHome } from "react-icons/hi";
import { MdNewspaper } from "react-icons/md";
import { GiRank3 } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
//import logo from "../assets/SIMBOLO.png";

const img = "https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2021/02/emblema-cbmce-2019-1.png"


export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <nav className="bg-red-800 font-serif fixed top-0 left-0 right-0 z-50">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
                <img src={img} alt="logo" className="w-16 h-16 mr-4" />
            </div> 
            <div className="flex-1">
                <h1 className="text-white text-2xl md:text-3xl font-bold">Corpo de Bombeiros Militar do Ceará</h1>
            </div> 

            {/* Menu Desktop */}

            <div className="hidden sm:flex space-x-2 items-center">
              <a href="/" className="text-gray-100 text-lg px-3 py-2 hover:bg-red-600 hover:-translate-y-1 hover:scale-110 duration-200 rounded-md flex items-center gap-2">
                <HiHome className="text-xl" />
                Home
              </a>
              <a href="/noticias" className="text-gray-100 text-lg px-3 py-2 hover:bg-red-600 hover:-translate-y-1 hover:scale-110 duration-200 rounded-md flex items-center gap-2">
                <MdNewspaper className="text-xl" />
                Noticias
              </a>
              <a href="/comandantes" className="text-gray-100 text-lg px-3 py-2 hover:bg-red-600 hover:-translate-y-1 hover:scale-110 duration-200 rounded-md flex items-center gap-2">
                <GiRank3 className="text-xl" />
                Comandantes
              </a>
              <a href="/projetos" className="text-gray-100 text-lg px-3 py-2 hover:bg-red-600 hover:-translate-y-1 hover:scale-110 duration-200 rounded-md flex items-center gap-2">
                <FaHandsHelping className="text-xl" />
                Projetos Sociais
              </a>
            </div>
            
            {/* Botão Mobile */}

            <div className="sm:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white text-3xl hover:text-red-200 transition-colors duration-200"
              >
                <CiMenuBurger />
              </button>
            </div>
          </div>
          
          {/* Menu Mobile */}
          
          <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden pb-4`}>
            <div className="space-y-2">
              <a href="/" className="text-gray-100 font-bold text-lg px-3 py-2 block hover:bg-red-500 hover:text-white transition-all duration-200 rounded-md flex items-center gap-2">
                <HiHome className="text-xl" />
                Home
              </a>
              <a href="/noticias" className="text-gray-100 font-bold text-lg px-3 py-2 block hover:bg-red-600 hover:text-white transition-all duration-200 rounded-md flex items-center gap-2">
                <MdNewspaper className="text-xl" />
                Noticias
              </a>
              <a href="/comandantes" className="text-gray-100 font-bold text-lg px-3 py-2 block hover:bg-red-600 hover:text-white transition-all duration-200 rounded-md flex items-center gap-2">
                <GiRank3 className="text-xl" />
                Comandantes
              </a>
              <a href="/projetos" className="text-gray-100 font-bold text-lg px-3 py-2 block hover:bg-red-600 hover:text-white transition-all duration-200 rounded-md flex items-center gap-2">
                <FaHandsHelping className="text-xl" />
                Projetos Sociais
              </a>
            </div>
          </div>
        </div>
      </nav>
        </>
        
    )
}
