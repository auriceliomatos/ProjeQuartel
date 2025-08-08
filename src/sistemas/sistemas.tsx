// importação de componentes
import { Menu } from '../menu/menu'
import { Borda } from '../home/borda/borda'
import { Comando } from './comando/comando'
import { SubComando } from './comando/subcomando'
import { Footer } from '../foot/foot'
import { ExChefes } from './exchefes/exchefes'


export const Comandantes = () => {
    return (
         <>
     <div className="items-center justify-center"> 
        
        <div className="w-full"> 
        <Menu/>
        </div>

        

        <div className="w-full"> 

        <div className="w-full"> 
        <h1 className="text-white text-2xl text-center font-bold m-2">Comandantes</h1>
          <p className="text-white text-1xl items-center text-justify m-2 ">A Cia do Corpo de Bombeiros Militar de Crateús-Ce tem atualmente em seu Comando o Maj QOBM José Artemio Prado júnior e Sub Cmt 1º Ten QOBM Clebiano vale. Contando com um efetivo de 22 profissionais que diuturnamente velam pela segurança e o bem-estar de toda a região dos Inhamuns. </p>
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
        <ExChefes/>
        </div>

        <div className="w-full"> 
        <Footer/>
        </div>
        
       
      </div>
     </>
    )
}