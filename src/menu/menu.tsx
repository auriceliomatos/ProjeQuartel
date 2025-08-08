import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/SIMBOLO.png";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <nav className="bg-red-800 font-serif ">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-bold">
                <img src={logo} alt="logo" className="w-10 h-10" />
            </div> 
            <div className="text-white">
                <h1 className="text-white text-3xl m-5 ">Corpo de Bombeiros Militar do Ceará </h1>
            </div> 

            {/* Menu Desktop */}

            <div className="hidden sm:flex space-x-2 ml-auto">
              <a href="/" className=" text-gray-100 text-lg px-3 py-2 hover:bg-red-600 hover:-translate-y-1 hover:scale-110  duration-200 rounded-md"> Home </a>
              <a href="/noticias" className="text-gray-100 text-lg px-3 py-2 block hover:bg-red-600 hover:text-white transition-all duration-200 rounded-md">Noticias</a>
              <a href="/Comandantes" className="text-gray-100 text-lg px-3 py-2 hover:bg-red-600 hover:-translate-y-1 hover:scale-110 duration-200 rounded-md"> Comandantes</a>
              <a href="/projetos" className="text-gray-100 text-lg px-3 py-2 hover:bg-red-600 hover:-translate-y-1 hover:scale-110 duration-200 rounded-md">Projetos Sociais</a>
            </div>
            
            {/* Botão Mobile transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500*/}

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
            <div className="space-y-2  ">
              <a href="/" className="text-gray-100 font-bold text-lg px-3 py-2 block hover:bg-red-500 hover:text-white transition-all duration-200 rounded-md">Home</a>
              <a href="/noticias" className="text-gray-100 font-bold text-lg px-3 py-2 block hover:bg-red-600 hover:text-white transition-all duration-200 rounded-md">Noticias</a>
              <a href="/sistemas" className="text-gray-100 font-bold text-lg px-3 py-2 block hover:bg-red-600 hover:text-white transition-all duration-200 rounded-md">Comandantes</a>
              <a href="/projetos" className="text-gray-100 font-bold text-lg px-3 py-2 block hover:bg-red-600 hover:text-white transition-all duration-200 rounded-md">Projetos Sociais</a>
            </div>
          </div>
        </div>
      </nav>
        </>
        
    )
}
