import { Menu } from '../menu/menu'
import { Footer } from '../foot/foot'
import { Noticia01 } from './components/not1'
import { Noticia02 } from './components/not2'
import { Noticia03 } from './components/not3'
import { Noticia04 } from './components/not4'

//import { Borda } from '../home/borda/borda'

export const Noticia = () => { 
    return (
        <div className="items-center justify-center"> 
        
        <div className="w-full"> 
        <Menu/>
        </div>

        <div className="w-full flex flex-row gap-7 mt-2 mb-2 justify-center"> 
        <Noticia01/>
        <Noticia02/>
        <Noticia03/>
        <Noticia04/>
        </div>

        <div className="w-full flex flex-row gap-7 mt-2 mb-2 justify-center"> 
        <Noticia01/>
        <Noticia02/>
        <Noticia03/>
        <Noticia04/>
        </div>

        <div className="w-full flex flex-row gap-7 mt-2 mb-2 justify-center"> 
        <Noticia01/>
        <Noticia02/>
        <Noticia03/>
        <Noticia04/>
        </div>

        <div className="w-full"> 
        <Footer/>
        </div>
        
       
      </div>
    )
}