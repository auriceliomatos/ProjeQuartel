//importações de componentes
import { Menu } from '../menu/menu'
import { Footer } from '../foot/foot'
import { useState } from 'react'

//importações de páginas
import { Noticia } from './noticia'
import { Noticia2 } from './noticia2'
import { Noticia3 } from './noticia3'

export const PrincipalNoticia = () => {
    const [paginaAtual, setPaginaAtual] = useState(1)
    const totalPaginas = 3

    const proximaPagina = () => {
        if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1)
        }
    }

    const paginaAnterior = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1)
        }
    }

    const irParaPagina = (pagina: number) => {
        setPaginaAtual(pagina)
    }

    return (
        <div className="items-center justify-center pt-8"> 
        
        <div className="w-full"> 
        <Menu/>
        </div>

        {/* Conteúdo da página atual */}
        <div className="w-full"> 
        {paginaAtual === 1 ? <Noticia/> : paginaAtual === 2 ? <Noticia2/> : paginaAtual === 3 ? <Noticia3/> : <Noticia/>}
        </div>

        {/* Sistema de Paginação */}
        <div className="w-full flex justify-center items-center py-8">
            <div className="flex items-center space-x-4">
                {/* Botão Anterior */}
                <button 
                    onClick={paginaAnterior}
                    disabled={paginaAtual === 1}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        paginaAtual === 1 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                >
                    Anterior
                </button>

                {/* Indicadores de Página */}
                <div className="flex space-x-2">
                    {Array.from({ length: totalPaginas }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => irParaPagina(index + 1)}
                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                                paginaAtual === index + 1
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Botão Próximo */}
                <button 
                    onClick={proximaPagina}
                    disabled={paginaAtual === totalPaginas}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        paginaAtual === totalPaginas 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                >
                    Próximo
                </button>
            </div>
        </div>

        {/* Indicador de página atual */}
        <div className="w-full text-center pb-4">
            <span className="text-gray-600 font-medium">
                Página {paginaAtual} de {totalPaginas}
            </span>
        </div>

        <div className="w-full"> 
        <Footer/>
        </div>

        </div>
    )
}