import { Coll1 } from "./coll1";

const img1 = "https://www.cepi.cb.ce.gov.br/wp-content/uploads/sites/100/2019/04/CEPI_cabe%C3%A7alho.png";

export const Collapse = () => {
  return (
    <div className="w-full h-150  font-serif flex flex-col">

      <div className="w-full h-15 flex justify-center items-center">
        <h1 className="text-3xl font-bold ">
        Dúvidas no Certificado AVCB/CBMCE ?
        </h1>
      </div>

      <div className="w-full h-20 justify-center items-center ">
        <h1 className="text-2xl w-350 ml-30 justify-center items-center">
        OBJETIVO: Estabelecer os critérios do processo de segurança contra incêndio e pânico das edificações e áreas de risco, atendendo ao previsto na Lei nº 13.556, de 29 de dezembro de 2004, alterada pela Lei nº 16.361, de 9 de outubro de 2017. 
        </h1>
      </div>

      <div className="w-full h-100 flex justify-center items-center">

        <div className="w-full h-full flex flex-col m-8 mt-20">

        <Coll1 
        titulo="O que é o AVCB/CBMCE ?" 
        conteudo="O AVCB é um documento que atesta que uma edificação cumpre com as normas de segurança contra incêndio e pânico, garantindo que as medidas de prevenção e combate a incêndios estão adequadas. "/>

        <Coll1 
        titulo="Quem precisa do AVCB/CBMCE ?" 
        conteudo="Edificações de uso coletivo, como escolas, hospitais, shoppings, e estabelecimentos comerciais, precisam do AVCB. Também é exigido para construções novas e reformas significativas. "/>

        <Coll1 
        titulo="O que acontece se não tiver o AVCB/CBMCE ?" 
        conteudo="A falta do AVCB pode resultar em multas e penalidades, além de tornar a edificação irregular perante a legislação de segurança. "/>

        <Coll1 
        titulo="Como posso solicitar o certificado de conformidade ?" 
        conteudo="As solicitações devem ser feitas de forma digital pelo site do CEPI clicando em Serviços. "/>

        <Coll1 
        titulo="Documentos necessários para obter o certificado ?" 
        conteudo="Nota fiscal dos extitores,
        Documentação da edificação, como comprovante de área (como escritura ou IPTU) e CNPJ impresso.  "/>


      </div>

      <div className="w-full flex justify-center items-center ">
        <a href="https://www.cepi.cb.ce.gov.br/servicos/" target="_blank" rel="noopener noreferrer">
          <img src={img1} alt="img1" className="w-80 h-80 mr-80
          hover:shadow-xl transition-transform duration-300
          outline-1 outline-offset-2 outline-none
          ease-in-out hover:-translate-y-1  hover:shadow-red-500/40 hover:scale-105
          " />
        </a>
  
      </div>

      </div>
      

    </div>
  );
};
