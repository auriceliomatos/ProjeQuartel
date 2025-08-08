//importações de imagens principais
import img1 from "../../assets/comados/cle.jpeg";
// importações de imagens secundarias
import img2 from "../../assets/comados/cle.jpeg";
import img3 from "../../assets/comados/cle.jpeg";

import React, { useState } from "react";

export const SubComando = () => {
  const [noticiaDestaque, setNoticiaDestaque] = useState(null);

  const noticias = [
    {
      id: 1,
      titulo: " 1ºTen QOABM Clebiano",
      preco: "SUB COMANDANTE",
      imagem: img1,
      descricao: `

            No dia 25 de julho de 2025, às 17:03 horas, a guarnição do Corpo de Bombeiros Militar do Ceará, sediada na 1ª Companhia do 4º Batalhão de Bombeiros Militares de Crateús, foi acionada via CIOPS (Centro Integrado de Operações de Segurança Pública) para atender uma ocorrência de incêndio ﬂorestal registrada sob o número RO20250032943.
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
                01/08/2022{" "}
              </span>
            )}


            <div className="w-full h-80 flex flex-col items-center justify-center p-2">
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
                className="w-65 h-80 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-red-500 font-bold h-10 flex items-center justify-center text-2xl">
              {noticia.titulo}
            </h3>

            <p className="text-white w-70  flex  items-center justify-center mt-2  text-2xl">
              {noticia.preco}
            </p>

            <div className=" w-full mt-8 flex  items-center justify-center ">
              <button
                onClick={() => handleSaibaMais(noticia)}
                className="bg-red-900 text-branca border-none  rounded-md text-base cursor-pointer 
                transition-colors duration-300 ease-in-out hover:bg-red-500 active:translate-y-0.5
                outline-2 outline-offset-2 outline-red-500"
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
        <div className="fixed top-0 left-0 w-screen h-screen bg-preta flex items-center justify-center z-100">
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
                  .slice(0, 4)
                  .map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={noticiaDestaque.titulo + " imagem " + (idx + 1)}
                      className="w-55 h-60  rounded-lg"
                    />
                  ))}
            </div>
            <div className="flex flex-col items-center justify-center m-2">
              {noticiaDestaque.descricao
                .split("\n")
                .filter((paragrafo) => paragrafo.trim() !== "")
                .map((paragrafo: string, idx: number) => (
                  <p
                    key={idx}
                    className=" flex text-justify text-branca h-full w-150 mt-2 mb-2"
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
