const img1 = "https://www.bombeiros.ce.gov.br/wp-content/uploads/sites/27/2025/05/RODAPE-SITE-110-ANOS.png";

export const Papel = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-white">
      <img
        src={img1}
        alt="img1"
        className="w-full sm:h-60 md:h-80 lg:h-160 opacity-80 
        transition delay-150 duration-700 ease-in-out hover:-translate-x-1 hover:scale-105 
        "
      />
      <h1 className="text-red-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold absolute bg-black/40 rounded py-1 px-4 
      text-center sm:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         2ª Cia / 4º BBM de Crateús
      </h1>
    </div>
  )
}

