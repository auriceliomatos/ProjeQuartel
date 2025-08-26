// React import
import React, { useEffect, useState, useRef, useCallback } from "react";

// interface to type products
interface Produto {
  id: number;
  nome: string;
  preco: string;
  promocao?: string;
  imagem: string;
}

// image imports
const img1 = "https://i.im.ge/2025/08/22/JJXuhF.c2.jpeg";
const img2 = "https://i.im.ge/2025/08/22/JJXdHh.v6.jpeg";
const img3 = " https://i.im.ge/2025/08/22/JJXFYK.c7.jpeg";
const img4 = "https://i.im.ge/2025/08/22/JJX2aX.c88.jpeg";
const img5 = " https://i.im.ge/2025/08/22/JJXomS.c1.jpeg";
const img6 = " https://i.im.ge/2025/08/22/JJXro6.c3.jpeg";
const img7 = " https://i.im.ge/2025/08/22/JJXXWz.c4.jpeg";
const img8 = " https://i.im.ge/2025/08/22/JJXOB9.c10.jpeg";
const img9 = " https://i.im.ge/2025/08/22/JJXTOy.c5.jpeg";

export const Carrousel = ({ produtos = [], titulo = "Ex-Comandantes" }: { produtos?: Produto[], titulo?: string }) => {
  const [produtosLocais, setProdutosLocais] = useState<Produto[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const startAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  // Função para rolagem automática
  const autoScroll = useCallback(() => {
    console.log('Função autoScroll chamada');
    
    if (!carouselRef.current) {
      console.log('carouselRef não está disponível');
      return;
    }
    
    if (!isAutoPlaying) {
      console.log('Auto-play está desabilitado');
      return;
    }
    
    try {
      const element = carouselRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = element;
      
      console.log('Auto-scroll:', { scrollLeft, scrollWidth, clientWidth, isAutoPlaying });

      // Se chegou ao final, volta ao início
      if (scrollLeft >= scrollWidth - clientWidth - 10) { // Adiciona uma margem de 10px
        element.scrollTo({ left: 0, behavior: "smooth" });
        console.log('Voltando ao início');
      } else {
        element.scrollBy({ left: 300, behavior: "smooth" });
        console.log('Movendo para direita');
      }
    } catch (error) {
      console.error('Erro no auto-scroll:', error);
    }
  }, [isAutoPlaying]);

  useEffect(() => {
    if (produtos && produtos.length > 0) {
      setProdutosLocais(produtos);
    } else {
      // Dados padrão se não houver produtos via props
      const dadosPadrao: Produto[] = [
        {
          id: 1,
          nome: "Cel Anderson",
          preco: "Período 1999-2001",
          promocao: " 1º Comandante",
          imagem: img1,
        },
        {
          id: 2,
          nome: "Cel Jefferson",
          preco: "Período 2001",
          imagem: img2,
        },
        {
          id: 3,
          nome: "Cel Agnaldo",
          preco: "Período 2001-2004",
          imagem: img3,
        },
        {
          id: 4,
          nome: "Cel Nunes",
          preco: "Período 2005-2009",
          imagem: img4,
        },
        {
          id: 5,
          nome: "Maj Prado",
          preco: "Período 2009-2012",
          imagem: img5,
        },
        {
          id: 6,
          nome: "Cel Sousa Junior ",
          preco: "Período 2012-2016 ",
          imagem: img6,
        },
        {
          id: 7,
          nome: "Cel Marciel ",
          preco: "Período 2017 ",
          imagem: img7,
        },
        {
          id: 8,
          nome: "Cel Alexandre",
          preco: "Período 2018-2019 ",
          imagem: img8,
        },
        {
          id: 9,
          nome: "Cel Homero ",
          preco: "Período 2019-2022",
          promocao: " Último Comandante",
          imagem: img9,
        },
      ];
      setProdutosLocais(dadosPadrao);
    }
    console.log("Carrousel renderizado com produtos:", produtosLocais);
  }, [produtos]);

  // Efeito para rolagem automática
  useEffect(() => {
    console.log('useEffect auto-play executado:', { isAutoPlaying, produtosLength: produtosLocais.length });
    
    // Só inicia o auto-play quando temos produtos carregados
    if (isAutoPlaying && produtosLocais.length > 0) {
      console.log('Iniciando auto-play com intervalo de 3 segundos');
      
      // Pequeno delay para garantir que o DOM esteja pronto
      const timeoutId = setTimeout(() => {
        autoPlayRef.current = setInterval(autoScroll, 2000); // Move a cada 3 segundos
        console.log('Intervalo iniciado após delay');
      }, 1000);
      
      return () => {
        clearTimeout(timeoutId);
        if (autoPlayRef.current) {
          console.log('Limpando intervalo do auto-play');
          clearInterval(autoPlayRef.current);
        }
      };
    }

    return () => {
      if (autoPlayRef.current) {
        console.log('Limpando intervalo do auto-play');
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, produtosLocais.length, autoScroll]);

  if (!produtosLocais || produtosLocais.length === 0) {
    console.log("Nenhum produto encontrado");
    return <div>Carregando produtos...</div>;
  }

  return (
    <div className="w-full h-full m-2 mb-4 font-serif">

      <div className="flex flex-col justify-center h-45 mt-4">
        <h1 className="text-center text-4xl text-white">{titulo}</h1>
        <h1 className="w-380  justify-center text-2xl text-white mt-5 mb-4">
        Neste espaço digital prestamos uma homenagem especial aos ex-comandantes do Corpo de Bombeiros Militar de Crateús-CE. Homens valentes que dedicaram suas vidas à proteção e ao serviço da comunidade. Este mural é mais do que uma simples homenagem; é um tributo à coragem, à liderança e ao compromisso inabalável que esses homens exemplificaram durante seus mandatos.

        </h1>
      </div>

      <div
        className="relative flex items-center"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-red-600 rounded-full text-8xl flex items-center justify-center z-10 transition-all duration-300 ease-in-out hover:scale-110"
          onClick={scrollLeft}
        >
          ‹
        </button>

        <div
          ref={carouselRef}
          className="flex h-full gap-3 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {produtosLocais.map((produto) => (
            <div
              key={produto.id}
              className="w-74 flex flex-col items-center flex-none rounded border border-red-500"
            >
              <div className="w-full h-85 rounded-lg flex justify-center items-center">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-60 h-80 object-cover rounded-md border-3 border-red-500"
                />
              </div>
              <div className="h-30 w-full flex flex-col justify-between items-center">
                <span className="text-lg font-bold text-red-500 text-center">
                  {produto.nome}
                </span>
                <span className=" text-red-500 text-sm mt-2">
                   {produto.preco}
                </span>

                <div className="w-full h-full flex justify-center items-center ">
                  <span className="font-bold flex justify-center items-center text-white">
                 {produto.promocao}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-10 top-1/2 transform -translate-y-1/2 text-red-600 rounded-full w-10 h-10 text-8xl  flex items-center justify-center z-10 transition-all duration-300 ease-in-out hover:scale-110"
          onClick={scrollRight}
        >
          ›
        </button>
      </div>
    </div>
  );
};
