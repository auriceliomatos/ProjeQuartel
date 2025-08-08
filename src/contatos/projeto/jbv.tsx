//importações de imagens
const img1 = 'https://www.ceara.gov.br/wp-content/uploads/2024/03/loreto-glp.jpg';

const img2 = 'https://www.ceara.gov.br/wp-content/uploads/2023/07/Jovem-Brigadista-de-Valor_-CBMCE-realiza-formatura-de-22-alunos-em-Sao-Goncalo-do-Amarante-3.jpg';

const img3 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2023/08/DSC_7748.jpg';

const img4 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_9058.jpg';
const img5 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_8944.jpg';
const img6 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_8851.jpg';
const img7 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_8977.jpg';
const img8 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2022/12/DSC_9085.jpg';
const img9 = 'https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2023/10/jbv-caninde.jpeg';




export const Jbv = () => {
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

            <div className="w-full h-40 flex flex-col justify-center items-center m-4   ">

                <h1 className="text-white text-center font-bold text-3xl mb-4"> O programa Jovem Brigadista de Valor (JBV)  </h1> 
                <p className="text-white text-xl text-justify max-w-6xl ">
                Tem a missão de contribuir na formação das crianças e adolescentes de ambos os sexos. Na faixa etária de 14 a 17 anos. Utilizando como referência valores de civismo e cidadania, como ética, respeito à pluralidade cultural, valorização e preservação do meio ambiente.  
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2">
                {Chefes.map((chefe) => (
                    <div key={chefe.id} className="relative bg-gray-900 border-2 border-red-500 rounded-xl text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500">
                        
                        <div className="w-full h-80 flex justify-center items-center p-2">
                            <img 
                                src={chefe.imagem} 
                                alt={chefe.titulo} 
                                className="w-full h-full object-cover rounded-lg"
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

