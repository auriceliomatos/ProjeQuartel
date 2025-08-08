import React from "react";
// importação de efeitos
import { Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative, EffectCoverflow  } from "swiper/modules";

// importação de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importação dos estilos CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";

// importação do Link do React Router
import { Link } from "react-router-dom";

// importação das imagens
import img1 from "../../assets/ocorrencia/f4.jpeg";
import img2 from "../../assets/ocorrencia/f1.jpeg";
import img3 from "../../assets/ocorrencia/i6.jpeg";
import img4 from "../../assets/ocorrencia/n1.jpeg";
import img5 from "../../assets/ocorrencia/an-1.jpeg";
import img6 from "../../assets/ocorrencia/e.jpeg";




export const Sliderr = () => {
  const imagens = [
    {
      id: 1,
      image: img1,
      title: "Incêndio florestal",
    },
    {
      id: 2,
      image: img2,
      title: "Incêndio florestal",
    },
    {
      id: 3,
      image: img3,
      title: "Incêndio monturo",
    },
    {
      id: 4,
      image: img4,
      title: "Incêndio florestal",
    },
    {
      id: 5,
      image: img5,
      title: "Captura de animal",
    },
    {
      id: 6,
      image: img6,
      title: "Incêndio florestal",
    },
  ];
  
  return (

    <div className="w-full h-full  flex-col items-center justify-center bg-gray-900 " >

      <div className="w-full flex justify-center">
        <h1 className="text-white text-3xl font-serif m-5">
        Por Dentro da Notícia
        </h1>
      </div>

    <div className="w-full h-full flex-col items-center justify-center pb-5 mt-2">

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative]}
        effect="correflow"
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full  "
        style={{
          '--swiper-navigation-color': '#d5990f',
          '--swiper-pagination-color': '#d5990f'
        } as React.CSSProperties}
      >
        {imagens.map((imagem) => (
          <SwiperSlide key={imagem.id} className=" w-full h-full p-2">
            <div className="relative">
              <img 
                src={imagem.image} 
                alt='slider'
                className="w-full h-80 object-cover rounded-lg border-2 border-white"
              />
              <span className="absolute top-4 left-6 text-white text-2xl font-serif bg-black opacity-50 px-2 py-1 rounded">
                {imagem.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex justify-center m-3">
        <Link to="/noticias">
          <button className="text-white text-2xl font-serif bg-black opacity-50 px-2 py-1
           rounded hover:bg-red-600 hover:-translate-y-1 hover:scale-110  duration-200
           outline-2 outline-offset-2 outline-red-500">
            Ver Mais Notícias 
            
          </button>
        </Link>
      </div>
    </div>
   
    </div>

  );
};
