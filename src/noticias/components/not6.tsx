import React from 'react';

export const Noticia06 = ({ titulo, equipe, descricao, imag, span }: { titulo: string, equipe: string, descricao: string, imag: string[], span: string }) => {

  // Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Função para abrir o modal
  const handleSaibaMais = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-row  w-70 h-120 mt-2 mb-2">
        <div className=" relative bg-blue-970 border-2 border-red-500 rounded-xl text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500">
          <span className="w-20 absolute font-bold top-3 right-4 text-xs rounded-md bg-red-500 text-white ">
            {" "}
            {span}
          </span>
          <div className="w-full h-70 flex flex-col items-center justify-center p-2">
              <img
               src={imag[0]}
               alt="Noticia 06"
               className="w-70 h-67 object-cover rounded-lg"
             />
          </div>
          <h3 className="text-red-500 text-lg font-bold h-10 flex items-center justify-center" >
          {titulo}
          </h3>
          <p className="text-white w-70 h-10 flex  items-center justify-center mt-5">
          {equipe}
          </p>
          <div className=" w-full h-30 flex  items-center justify-center ">
            <button
              onClick={handleSaibaMais}
              className="bg-red-900 text-branca border-none  rounded-md text-base cursor-pointer 
                  transition-colors duration-300 ease-in-out hover:bg-red-500 active:translate-y-0.5"
            >
              <p className="w-20 text-branca text-sm font-bold m-1">
                {" "}
                saiba mais
                {" "}
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-preta flex items-center justify-center z-100">
          <div className="bg-blue-950 rounded-lg max-w-230 w-full shadow-lg relative text-center border-2 border-red-500">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2.5 bg-transparent border-none text-2xl cursor-pointer text-red-600 hover:no-underline transition-colors rounded-md m-1"
            >
              x
            </button>
            <div className="flex flex-col h-10  items-center justify-center m-2">
              <h2 className="text-white text-2xl font-bold">
              {titulo}
              </h2>
            </div>
            <div className="flex gap-6 justify-center h-full">

              <img 
                 src={imag[0]}
                 alt="Noticia 06"
                 className="w-60 h-60 object-cover rounded-lg"
               />
               <img
                 src={imag[1]}
                 alt="Noticia 06"
                 className="w-60 h-60 object-cover rounded-lg"
               />
               <img
                 src={imag[2]}
                 alt="Noticia 06"
                 className="w-60 h-60 object-cover rounded-lg"
               />
            </div>
            <div className="flex flex-col items-center justify-center m-2">
              <p
                className=" flex text-justify text-branca h-full w-200 mt-2 mb-2"
              >
                {descricao}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
