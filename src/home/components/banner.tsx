import React from "react";
// importação de efeitos
import { Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative, EffectCoverflow} from "swiper/modules";
// importação de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importação dos estilos CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// importação do Link do React Router
import { Link } from "react-router-dom";

// importação das imagens
const img1 = "https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2025/06/CONABOM.pdf-900-x-600-px-1200x800.png";
const img2 = "https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2025/05/RODAPE-SITE-110-ANOS-1200x400.png";
const img3 = "https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2024/11/08EDB1BF-676B-4554-9588-28E22EE38A4F.jpeg";
const img4 = "https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2025/07/DSC_4439.jpg";




export const Banner = () => {
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
    

  ];
  
  return (

    <div className="w-full h-full  flex-col items-center justify-center bg-gray-900 " >

      <div className="w-full flex justify-center">
        <h1 className="text-white text-3xl font-serif m-5">
        Serviço e utilidade pública
        </h1>
      </div>

    <div className="w-full h-full flex items-center justify-center pb-5 mt-2">

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative]}
        effect="coverflow"
        slidesPerView={1}
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
        className="w-200 h-full  "
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
                className="w-200 h-80  rounded-lg border-2 border-white"
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
   
    </div>

  );
};
