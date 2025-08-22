// importação de componentes
import { Menu } from '../menu/menu'
import { Borda } from '../home/borda/borda'
import { Comando } from './comando/comando'
import { SubComando } from './comando/subcomando'
import { Footer } from '../foot/foot'
import { Carrousel } from './exchefes/exslider'

export const Comandantes = () => {
    return (
         <>
     <div className="items-center justify-center pt-20"> 
        
        <div className="w-full"> 
        <Menu/>
        </div>

        <div className="w-full"> 

        <div className="w-full h-40 flex flex-col justify-center items-center font-serif"> 
        <h1 className="text-white text-3xl text-center font-bold mt-10">Comandantes</h1>
          <p className="text-white text-2xl items-center text-justify m-2 w-350 mb-7">A Cia do Corpo de Bombeiros Militar de Crateús-Ce tem atualmente em seu <a className="underline decoration-red-500"> Comando o Maj QOBM José Artemio Prado júnior </a> e <a className="underline decoration-red-500"> Sub Cmt 1º Ten QOBM Clebiano vale</a>. Contando com um efetivo de 22 profissionais que diuturnamente velam pela segurança e o bem-estar de toda a região dos Inhamuns. </p>
        </div>
          <div className="w-full flex flex-row gap-7 mt-2 mb-2 justify-center"> 
          <Comando/>
          <SubComando/>
          </div>

        
        </div>

        <div className="w-full"> 
        <Borda/>
        </div>

        <div className="w-full"> 
        <Carrousel/>
        </div>

        <div className="w-full"> 
        <Footer/>
        </div>
        
       
      </div>
     </>
    )
}