//importações de imagens principais
const img1 = "https://i.im.ge/2025/07/31/JPPBlp.e-5.jpeg";
// importações de imagens secundarias
const img2 = "https://i.im.ge/2025/07/31/JPPeg1.e-4.jpeg";
const img3 = "https://i.im.ge/2025/07/31/JPPJ6C.e-6.jpeg";

import React, { useState } from "react";

export const Noticia04 = () => {
  const [noticiaDestaque, setNoticiaDestaque] = useState(null);

  const noticias = [
    {
      id: 1,
      titulo: " Captura de jacaré",
      preco: "Equipe de serviço: SUB TEN Auricelio, SARGENTO Agnaldo, Cabo Cleuto, Soldado Correia Lima",
      imagem: img1,
      descricao: `
            A guarnição foi acionada via CIOPS para atendimento de ocorrência de incêndio em vegetação na Rua Francisco Sobreira Leite, bairro Cidade 2000, próximo à caixa d’água da CAGECE, em Crateús/CE. A solicitação foi feita pelo Sr. Gilson, através do telefone (88) 99223-1943, informando intensa fumaça e fogo na vegetação da área.
            Ao chegar ao local, a guarnição: Constatou que a área havia passado por queimada recente, porém sem fogo ativo no momento da chegada;
            Realizou verificação na área para identificar possíveis focos remanescentes ou riscos de reignição; Executou ações de orientação à população local, destacando a proibição da prática de queimadas, conforme previsto na legislação ambiental vigente;  Reforçou a importância de comunicar imediatamente os órgãos competentes em caso de novos focos; Após a verificação e orientações, a guarnição retornou à unidade.

`,
      promocao: true,
      imagens: [img1, img2, img3], // Exemplo de até 3 imagens
    },
  ];

  const handleSaibaMais = (noticia) => {
    setNoticiaDestaque(noticia);
  };

  const handleCloseModal = () => {
    setNoticiaDestaque(null);
  };

  return (
    <>
      <div className="flex flex-row  w-70 h-120 mt-2 mb-2">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className=" relative bg-blue-970 border-2 border-red-500 rounded-xl text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500"
          >
            {noticia.promocao && (
              <span className="w-20 absolute font-bold top-3 right-4 text-xs rounded-md bg-red-500 text-white ">
                {" "}
                28/06/2025{" "}
              </span>
            )}


            <div className="w-full h-70 flex flex-col items-center justify-center p-2">
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
                className="w-65 h-80 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-red-500 text-lg font-bold h-10 flex items-center justify-center">
              {noticia.titulo}
            </h3>

            <p className="text-white w-70 h-10 flex  items-center justify-center mt-5">
              {noticia.preco}
            </p>

            <div className=" w-full h-30 flex  items-center justify-center ">
              <button
                onClick={() => handleSaibaMais(noticia)}
                className="bg-red-900 text-branca border-none  rounded-md text-base cursor-pointer 
                transition-colors duration-300 ease-in-out hover:bg-red-500 active:translate-y-0.5"
              >
                <p className="w-20 text-branca text-sm font-bold m-1">
                  {" "}
                  saiba mais{" "}
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/*----------------------------------- Modal de destaque -----------------------*/}
      {noticiaDestaque && (
        <div className="fixed top-2 left-0 w-screen h-screen bg-preta flex items-center justify-center z-100">
          <div className="bg-blue-950 rounded-lg max-w-230 w-full shadow-lg relative text-center border-2 border-red-500">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2.5 bg-transparent border-none text-2xl cursor-pointer text-red.600 hover:bg-blue-950 transition-colors"
            >
              ×
            </button>
            <div className="flex flex-col h-10  items-center justify-center m-2">
              <h2 className="text-white text-2xl font-bold">
                {noticiaDestaque.titulo}
              </h2>
            </div>

            <div className="flex gap-6 justify-center h-full">
              {noticiaDestaque.imagens &&
                noticiaDestaque.imagens
                  .slice(0, 3)
                  .map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={noticiaDestaque.titulo + " imagem " + (idx + 1)}
                      className="w-60 h-60 object-cover rounded-lg"
                    />
                  ))}
            </div>
            <div className="flex flex-col items-center justify-center m-2">
              {noticiaDestaque.descricao
                .split("\n")
                .filter((paragrafo) => paragrafo.trim() !== "")
                .map((paragrafo, idx) => (
                  <p
                    key={idx}
                    className=" flex text-justify text-branca h-full w-200 mt-2 mb-2"
                  >
                    {paragrafo.trim()}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
