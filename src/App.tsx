//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Home } from './home/index'
import { Comandantes } from './sistemas/sistemas'
import { Noticia } from './noticias/noticia'
import { Contatos } from './contatos/contatos'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {

  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comandantes/*' element={<Comandantes />} />
          <Route path='/projetos' element={<Contatos/>} />
          <Route path='/noticias' element={<Noticia/>} />
   

          
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}


