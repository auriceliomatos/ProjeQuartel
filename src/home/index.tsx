// importação de imagem
//import mg1 from '../assets/img/logo1.jpg'

// importação do componente React
import { Menu } from '../menu/menu'
import { Papel } from './papel/papel'
import { Footer } from '../foot/foot'
import { Historia } from './historia/historia'
import { Sliderr } from './components/sliderr';
import { Borda } from './borda/borda';
import { Contatos } from './contato/contato';
import { Banner } from './components/banner';

export const Home = () => {
  return (
 
    <>
     <div className="items-center justify-center flex flex-col"> 
        
        <div className="w-full"> 
        <Menu/>
        </div>

        <div className="w-full"> 
        <Papel/>
        </div>

        <div className="w-full"> 
        <Borda/>
        </div>

        <div className="w-full"> 
        <Historia/>
        </div>

        <div className="w-full"> 
        <Borda/>
        </div>

        <div className="w-full"> 
        <Banner/>
        </div>

        <div className="w-full"> 
        <Borda/>
        </div>

        <div className="w-full"> 
        <Sliderr/>
        </div>

        <div className="w-full"> 
        <Borda/>
        </div>

        <div className="w-full"> 
        <Contatos/>
        </div>

        <div className="w-full"> 
        <Footer/>
        </div>


      </div>
     </>
  
  );
};
