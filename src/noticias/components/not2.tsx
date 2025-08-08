//importações de imagens principais
const img1 = "https://i.im.ge/2025/07/30/JP50kx.q-2.jpeg";
// importações de imagens secundarias
const img2 = "https://i.im.ge/2025/07/30/JP5j9J.q-4.jpeg";
const img3 = "https://i.im.ge/2025/07/30/JP59Fa.q-3.jpeg";

import React, { useState } from "react";

export const Noticia02 = () => {
  const [noticiaDestaque, setNoticiaDestaque] = useState(null);

  const noticias = [
    {
      id: 1,
      titulo: " Incêndio em escola",
      preco: "Equipe de serviço: SUB TEN Auricelio, SARGENTO Agnaldo, Cabo Cleuto, Soldado Correia Lima",
      imagem: img1,
      descricao: `
            Na data de 28 de julho de 2025, às 10:00 horas, a equipe do Corpo de Bombeiros Militar do Ceará, ª Companhia do º Batalhão de Bombeiros Militar de Crateús, foi acionada pelo COPOM através do número  para atender uma ocorrência de incêndio em escola.
            A viatura ABTS02, com a equipe composta pelo Subtenente Auricélio, Sargento  Agnaldo, Cabo Cleuton e Soldado Correia Lima, deslocou-se para o local da ocorrência, chegando às 10:05 horas, totalizando 5 minutos de deslocamento.
            O local da ocorrência foi identiﬁcado como uma creche localizada em frente ao fórum da cidade de Crateús. Ao chegar no local, a equipe constatou que se tratava de um princípio de incêndio no telhado da ediﬁcação.
            Imediatamente, os bombeiros iniciaram as ações de combate ao fogo, utilizando enchada para conter a propagação das chamas e mangotinho para resfriar o material em combustão. Após aproximadamente 10 minutos, o incêndio foi totalmente controlado e debelado.
            Não houve vítimas fatais.
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
                className="w-65 h-full object-cover rounded-lg"
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

