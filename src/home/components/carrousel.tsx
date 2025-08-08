// importação do React
import React, { useEffect, useState } from "react";

// importação das imagens
import img1 from "../../assets/img2/c1.jpeg";
import img2 from "../../assets/img2/c2.jpeg";
import img3 from "../../assets/img2/c3.jpeg";
import img4 from "../../assets/img2/c4.jpeg";
import img5 from "../../assets/img2/i4.png";
import img6 from "../../assets/img2/i5.png";
import img7 from "../../assets/img2/i14.webp";

export const Carrousel = ({ produtos = [], titulo = "Nossas Canetas Coloridas" }) => {
  const [produtosLocais, setProdutosLocais] = useState([]);
  const carouselRef = React.useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? -200 : -300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 200 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (produtos && produtos.length > 0) {
      setProdutosLocais(produtos);
    } else {
      // Dados padrão se não houver produtos via props
      const dadosPadrao = [
        {
          id: 1,
          nome: "36 peças",
          preco: "55,00",
          valor: "50,00",
          imagem: img1,
          promocao: true,
          maisVendido: true,
        },
        {
          id: 2,
          nome: "24 peças",
          preco: "40,00",
          valor: "35,00",
          imagem: img2,
         
        },
        {
          id: 3,
          nome: "48 peças",
          preco: "65,00",
          valor: "60,00",
          imagem: img3,
        },
        {
          id: 4,
          nome: "60 peças",
          preco: "75",
          valor: "100,00",
          imagem: img4,
          maisVendido: true,
        },
        {
          id: 5,
          nome: "Produto 5",
          preco: "149,90",
          valor: "100,00",
          imagem: img5,
        },
        {
          id: 6,
          nome: "Produto 6",
          preco: "199,90",
          valor: "100,00",
          imagem: img6,
        },
        {
          id: 7,
          nome: "Produto 7",
          preco: "99,90",
          valor: "100,00",
          imagem: img7,
        },
        {
          id: 8,
          nome: "Produto 8",
          preco: "149,90",
          valor: "100,00",
          imagem: img2,
        }
      ];
      setProdutosLocais(dadosPadrao);
    }
    console.log("Carrousel renderizado com produtos:", produtosLocais);
  }, [produtos]);

  if (!produtosLocais || produtosLocais.length === 0) {
    console.log("Nenhum produto encontrado");
    return <div>Carregando produtos...</div>;
  }

  return (
    <div className="w-full h-full px-2 sm:px-4 md:px-6">

      <div className="flex flex-col justify-center h-16 sm:h-20 mb-4"> 
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl text-green-600">{titulo}</h1>
      </div>
      <div className="flex flex-col justify-center items-center h-12 sm:h-15 mb-4"> 
      <p>
  <span className="text-center text-lg sm:text-xl md:text-3xl text-white px-4">
  coleção completa de canetas coloridas para colorir
  </span>
</p>
</div>
      <div className="relative flex items-center">
        <button 
          className="absolute left-2 sm:left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-green-700 text-white border-none rounded-full w-8 h-8 sm:w-10 sm:h-10 text-lg sm:text-xl font-bold flex items-center justify-center z-10 transition-all duration-300 ease-in-out hover:bg-amber-600 hover:scale-110"
          onClick={scrollLeft}
        >
          ‹
        </button>
        
        <div ref={carouselRef} className="flex h-full gap-3 sm:gap-4 md:gap-5 overflow-x-auto scroll-smooth scrollbar-hide px-8 sm:px-12 md:px-16"> 
          {produtosLocais.map((produto) => (

            <div key={produto.id} className="w-64 sm:w-72 flex flex-col items-center flex-none rounded border bg-blue-970 border-green-500 relative">
              
              {produto.maisVendido && (
                <span className="absolute top-2 sm:top-4 right-2 sm:right-6 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                  <p className="text-center h-4 sm:h-5 w-16 sm:w-20 text-xs">Mais Vendido</p>
                </span>
              )}
              
              <div className="w-full h-full rounded-lg flex justify-center items-center p-2">
              
              <img 
                src={produto.imagem}
                alt={produto.nome}
                className="w-48 sm:w-60 h-56 sm:h-75 object-cover rounded-md border-2 border-green-500"
              />
              
              </div>
              <div className="h-24 sm:h-30 flex flex-col justify-between items-center w-full p-2">
                <span className="text-sm sm:text-lg font-bold text-green-500 text-center"> {produto.nome}</span>
                
                <span className="line-through text-red-500 text-xs sm:text-sm"> R$ {produto.preco}</span>

                <div className="w-full h-full flex justify-center items-center ">
                <span className="font-bold w-32 sm:w-40 h-6 rounded-lg flex justify-center items-center text-white bg-amber-600 text-xs sm:text-sm">
                  R$ {produto.valor}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button 
          className="absolute right-2 sm:right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-green-700 text-white border-none rounded-full w-8 h-8 sm:w-10 sm:h-10 text-lg sm:text-xl font-bold flex items-center justify-center z-10 transition-all duration-300 ease-in-out hover:bg-amber-600 hover:scale-110"
          onClick={scrollRight}
        >
          ›
        </button>
      </div>
    </div>
  );
};
