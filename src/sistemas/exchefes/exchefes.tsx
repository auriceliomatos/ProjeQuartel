//importações de imagens
import img1 from '../../assets/comados/c2.jpeg';
import img2 from '../../assets/comados/v6.jpeg';
import img3 from '../../assets/comados/c7.jpeg';
import img4 from '../../assets/comados/c88.jpeg';

import img5 from '../../assets/comados/c1.jpg';
import img6 from '../../assets/comados/c3.jpg';
import img7 from '../../assets/comados/c4.jpg';
import img8 from '../../assets/comados/c10.jpg';
import img9 from '../../assets/comados/c5.jpeg';

export const ExChefes = () => {
    const Chefes = [
        {
            id: 1,
            titulo: "Cel BM - Anderson",
            preco: "Comandante (1999-2001)",
            imagem: img1,
            promocao: true
        },
        {
            id: 2,
            titulo: "Cel BM - Jeferson",
            preco: "Comandante ( 2001 )",
            imagem: img2,
            descricao: "Sub Comandante que liderou importantes operações na região dos Inhamuns"
        },
        {
            id: 3,
            titulo: "Cel BM - Agnaldo",
            preco: "Comandante (2001-2004)",
            imagem: img3,
        },
        {
            id: 4,
            titulo: "Cel BM - Nunes",
            preco: "Comandante (2005-2009)",
            imagem: img4,
        },
        {
            id: 5,
            titulo: "Maj BM - Prado",
            preco: "Comandante (2009-2012)",
            imagem: img5,
        },
        {
            id: 6,
            titulo: "Cel BM - Sousa",
            preco: "Comandante (2012-2016)",
            imagem: img6,
        },
        {
            id: 7,
            titulo: "Cel BM - Marciel",
            preco: "Comandante (2016-2018)",
            imagem: img7,
        },
        {
            id: 8,
            titulo: "Cel BM - Alexandre",
            preco: "Comandante (2018-2019)",
            imagem: img8,
        },
        {
            id: 9,
            titulo: "Cel BM - Homero",
            preco: "Comandante (2019-2022)",
            imagem: img9,
        },
    ];

    return (
        <div className="max-w-full bg-gray-900 min-h-screen p-4">

            <div className="w-full h-40 flex flex-col justify-center items-center m-4   ">

                <h1 className="text-white text-center font-bold text-3xl mb-4">Mural dos Ex-Comandantes</h1> 
                <p className="text-white text-xl text-justify max-w-6xl ">
                    Neste espaço digital prestamos uma homenagem especial aos ex-comandantes do Corpo de Bombeiros Militar de Crateús-CE. Homens valentes que dedicaram suas vidas à proteção e ao serviço da comunidade. Este mural é mais do que uma simples homenagem; é um tributo à coragem, à liderança e ao compromisso inabalável que esses homens exemplificaram durante seus mandatos.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {Chefes.map((chefe) => (
                    <div key={chefe.id} className="relative bg-gray-900 border-2 border-red-500 rounded-xl text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500">
                        {chefe.promocao && (
                            <span className="absolute bg-red-500 text-white top-5 right-8 rounded-lg text-sm px-2 py-1 p-2">1ºComandante</span>
                        )}
                        <div className="w-60 h-80 flex justify-center items-center m-4">
                            <img 
                                src={chefe.imagem} 
                                alt={chefe.titulo} 
                                className="w-full h-full  rounded-lg"
                            />
                        </div>
                        <div className="h-15 flex flex-col justify-center items-center p-2 mb-2">
                            <h3 className="text-red-700 text-xl font-bold mb-1">{chefe.titulo}</h3>
                            <p className="text-white text-lg">{chefe.preco}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

