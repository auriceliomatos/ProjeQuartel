//importações de imagens
const img1 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2019/03/PSBS-768x512.jpg';
const img2 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2019/03/PSBS1-768x432.jpg';
import img3 from '../../assets/projeto/p-3.jpeg';
import img4 from '../../assets/projeto/p-4.jpeg';
const img5 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2023/08/WhatsApp-Image-2023-08-09-at-18.37.21.jpeg';
import img6 from '../../assets/projeto/p-6.jpeg';
import img7 from '../../assets/projeto/p-10.jpeg';
import img8 from '../../assets/projeto/p-8.jpeg';
import img9 from '../../assets/projeto/p-9.jpeg';




export const Psbs = () => {
    const Chefes = [
        {
            id: 1,
            titulo: "Altamira ",
            preco: " Projeto praça da altamira  ",
            imagem: img1,
            
        },
        {
            id: 2,
            titulo: "Marilac ",
            preco: "Comandante ( 2001 )",
            imagem: img2,
            descricao: "Sub Comandante que liderou importantes operações na região dos Inhamuns"
        },
        {
            id: 3,
            titulo: "Cosmo ",
            preco: "Comandante (2001-2004)",
            imagem: img3,
        },
        {
            id: 4,
            titulo: "Altamira",
            preco: "Comandante (2005-2009)",
            imagem: img4,
        },
        {
            id: 5,
            titulo: "Marilac",
            preco: "Comandante (2009-2012)",
            imagem: img5,
        },
        {
            id: 6,
            titulo: "Cosmo",
            preco: "Comandante (2012-2016)",
            imagem: img6,
        },
        {
            id: 7,
            titulo: "Altamira",
            preco: "Comandante (2016-2018)",
            imagem: img7,
        },
        {
            id: 8,
            titulo: "Marilac",
            preco: "Comandante (2018-2019)",
            imagem: img8,
        },
        {
            id: 9,
            titulo: "Altamira",
            preco: "Comandante (2019-2022)",
            imagem: img9,
        },
    ];

    return (
        <div className="max-w-full bg-gray-900 min-h-screen p-4">

            <div className="w-full h-40 flex flex-col justify-center items-center m-4">

                <h1 className="text-white text-center font-bold text-3xl mb-4"> Projeto Saúde, Bombeiros e Sociedade (PSBS) de Crateús </h1> 
                <p className="text-white text-xl text-justify max-w-6xl ">
                BSPS da 3ª Idade" é uma iniciativa voltada para o apoio e Promoção do Bem-Estar: Oferecer atividades que promovam a saúde física e mental dos idosos. 
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2">
                {Chefes.map((chefe) => (
                    <div key={chefe.id} className="relative bg-gray-900 border-2 border-red-500 rounded-xl text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500">
                        {chefe.promocao && (
                            <span className="absolute bg-red-500 text-white top-3 right-4 rounded-lg text-sm font-bold px-2 py-1 m-1">1ºComandante</span>
                        )}
                        <div className="w-full h-80 flex justify-center items-center p-2">
                            <img 
                                src={chefe.imagem} 
                                alt={chefe.titulo} 
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                        <div className="h-20 flex flex-col justify-center items-center p-2">
                            <h3 className="text-red-700 text-xl font-bold mb-1">{chefe.titulo}</h3>
                            <p className="text-white text-lg">{chefe.preco}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

