// Importing components


export const Contatos = () => {
    return (
        <>
            <div className="w-full  h-100 flex flex-col items-center justify-center font-serif  bg-gray-900 ">
                
               
                {/* Conteúdo bg-blue-970 */}

                <div className="w-full flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 ">
                    <div className="max-w-6xl w-full">

                        {/* Header */}
                        <div className="w-full flex items-center justify-center text-center h-24">
                            <h1 className="text-xl sm:text-2xl md:text-3xl text-white px-4">
                                ENTRE EM CONTATO
                            </h1>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 ">
                            
                            {/* Loja Conceito */}
                           
                    
                            <div className="bg-red-600 opacity-70 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300
                            outline-2 outline-offset-2 outline-red-500">
                                <div className="text-center">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                        Nossa Localização
                                    </h2>
                                    <div className="space-y-2 sm:space-y-3 text-white">
                                        <p className="text-xs sm:text-sm leading-relaxed text-lg">
                                            R:  Aeroporto - Aeroporto - Crateús/CE
                                        </p>
                                        <p className="text-xs sm:text-sm font-medium">
                                            Telefone: 193
                                        </p>
                                    </div>
                                </div>
                            </div>
                            

                            {/* Horário de Atendimento */}
                            <div className="bg-red-600 opacity-70 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300
                            outline-2 outline-offset-2 outline-red-500">
                                <div className="text-center">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                                        Horário de Atendimento
                                    </h2>
                                    <div className="space-y-2 sm:space-y-3 text-white">
                                        <p className="text-xs sm:text-sm">Segunda a Sexta-feira</p>
                                        <p className="text-xs sm:text-sm font-medium">Das 08:00 às 17:00</p>
                                    </div>
                                </div>
                            </div>

                            {/* Redes Sociais */}
                            <div className="bg-red-600 opacity-70 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1 outline-2 outline-offset-2 outline-red-500">
                                <div className="text-center">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
                                        Redes Sociais
                                    </h2>
                                    <div className="space-y-3 sm:space-y-4">
                                        
                                        {/* Instagram */}
                                        <a 
                                            href="https://instagram.com/rochelymsampaio" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="
                                                flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg
                                                bg-gradient-to-r from-pink-500 to-purple-600 text-white
                                                hover:from-pink-600 hover:to-purple-700 transition-all duration-300
                                                transform hover:scale-105 text-xs sm:text-sm
                                            "
                                        >
                                            <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                            </svg>
                                            <span className="font-medium">@corpo.bombeiros.crateus</span>
                                        </a>

                                        {/* Email */}
                                        <a 
                                            href="mailto:rochelymsampaio@gmail.com"
                                            className="
                                                flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg
                                                bg-gradient-to-r from-blue-500 to-blue-600 text-white
                                                hover:from-blue-600 hover:to-blue-700 transition-all duration-300
                                                transform hover:scale-105 text-xs sm:text-sm
                                            "
                                        >
                                            <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                            </svg>
                                            <span className="font-medium text-xs sm:text-sm">corpo.bombeiros.crateus@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}