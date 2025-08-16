import React from "react";
// importação de efeitos
import { Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative, EffectCoverflow  } from "swiper/modules";

// importação de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importação dos estilos CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// importação das imagens
const img1 = 'https://www.ceara.gov.br/wp-content/uploads/2024/03/loreto-glp.jpg';

const img2 = 'https://www.ceara.gov.br/wp-content/uploads/2023/07/Jovem-Brigadista-de-Valor_-CBMCE-realiza-formatura-de-22-alunos-em-Sao-Goncalo-do-Amarante-3.jpg';

const img3 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2023/08/DSC_7748.jpg';

const img4 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_9058.jpg';
const img5 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_8944.jpg';
const img6 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_8851.jpg';
const img7 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_8977.jpg';
const img8 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_9085.jpg';
const img9 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2023/10/jbv-caninde.jpeg';




export const SliderJbv = () => {
  const imagens = [
    {
      id: 1,
      image: img1,
      title: "Cosmo",
      promocao: true
    },
    {
      id: 2,
      image: img2,
      title: "Altamira",
    },
    {
      id: 3,
      image: img3,
      title: "Marilac",
    },
    {
      id: 4,
      image: img4,
      title: "Nova",
    },
    {
      id: 5,
      image: img5,
      title: " Caic",
    },
    {
      id: 6,
      image: img6,
      title: "Inhamuns",
    },
    {
      id: 7,
      image: img7,
      title: "1 janeiro",
    },
    {
      id: 8,
      image: img8,
      title: "Venancio",
    },
    {
      id: 9,
      image: img9,
      title: " Pirulito",
    }
  ];
  
  return (

<div className="w-full h-full  flex-col items-center justify-center bg-gray-900 " >

<div className="w-full h-40 flex flex-col justify-center items-center m-4">

<h1 className="text-white text-center font-bold text-3xl mb-4">
O programa Jovem Brigadista de Valor (JBV) 
   </h1> 
<p className="text-white text-xl text-justify max-w-6xl">
Tem a missão de contribuir na formação das crianças e adolescentes de ambos os sexos. Na faixa etária de 14 a 17 anos. Utilizando como referência valores de civismo e cidadania, como ética, respeito à pluralidade cultural, valorização e preservação do meio ambiente.
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
