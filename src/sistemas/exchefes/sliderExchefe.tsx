import React from "react";
// importação de efeitos
import { Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative, EffectCoverflow  } from "swiper/modules";

// importação de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importação dos estilos CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// importação do Link do React Router
import { Link } from "react-router-dom";

// importação das imagens
import img1 from "../../assets/comados/c2.jpeg";
import img2 from "../../assets/comados/v6.jpeg";
import img3 from "../../assets/comados/c7.jpeg";
import img4 from "../../assets/comados/c88.jpeg";
import img5 from "../../assets/comados/c1.jpg";
import img6 from "../../assets/comados/c3.jpg";
import img7 from '../../assets/comados/c4.jpg';
import img8 from '../../assets/comados/c10.jpg';
import img9 from '../../assets/comados/c5.jpeg';




export const SliderExchefe = () => {
  const imagens = [
    {
      id: 1,
      image: img1,
      title2: "Cel BM - Anderson",
      title: "(1999-2001)",
      promocao: true
    },
    {
      id: 2,
      image: img2,
      title2: "Cel BM - Jeferson",
      title: "( 2001 )",
    },
    {
      id: 3,
      image: img3,
      title2: "Cel BM - Agnaldo",
      title: "(2001-2004)",
    },
    {
      id: 4,
      image: img4,
      title2: "Cel BM - Nunes",
      title: "(2005-2009)",
    },
    {
      id: 5,
      image: img5,
      title2: "Cel BM - Prado",
      title: " (2009-2012)",
    },
    {
      id: 6,
      image: img6,
      title2: "Cel BM - Sousa Jr.",
      title: "(2012-2016)",
    },
    {
      id: 7,
      image: img7,
      title2: "Cel BM - Marciel",
      title: "(2016-2018)",
    },
    {
      id: 8,
      image: img8,
      title2: "Cel BM -Alexandre",
      title: "(2018-2019)",
    },
    {
      id: 9,
      image: img9,
      title2: "Cel BM - Homero",
      title: "(2019-2022)",
    }
  ];
  
  return (

<div className="w-full h-full  flex-col items-center justify-center bg-gray-900 " >

<div className="w-full h-40 flex flex-col justify-center items-center m-4">

<h1 className="text-white text-center font-bold text-3xl mb-4">Mural dos Ex-Comandantes</h1> 
<p className="text-white text-xl text-justify max-w-6xl">
    Neste espaço digital prestamos uma homenagem especial aos ex-comandantes do Corpo de Bombeiros Militar de Crateús-CE. Homens valentes que dedicaram suas vidas à proteção e ao serviço da comunidade. Este mural é mais do que uma simples homenagem; é um tributo à coragem, à liderança e ao compromisso inabalável que esses homens exemplificaram durante seus mandatos.
</p>
</div>

    <div className="w-full h-full flex-col pb-5 mt-2 font-serif">

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
                className="w-full h-90 object-cover rounded-lg border-3 border-red-600"
              />
              {imagem.promocao && (
              <span className="absolute bg-red-500 text-white top-70 right-33 rounded-lg text-sm px-1 py-1 p-3">1º Comandante</span>
            )}
              <span className="absolute left-12  text-red-600 text-2xl font-serif bg-black opacity-70 px-2 py-1 rounded-lg top-1">
                {imagem.title2}
              </span>
              <span className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600 text-2xl font-serif bg-black opacity-70 px-2 py-1 rounded-lg top-84">
                {imagem.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   
    </div>

  );
};
