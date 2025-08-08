import img1 from "../../assets/q8.jpeg";

export const Papel = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-white">
      <img
        src={img1}
        alt="img1"
        className="w-full sm:h-60 md:h-80 lg:h-140 opacity-40 
        transition delay-150 duration-700 ease-in-out hover:-translate-x-1 hover:scale-110 
        "
      />
      <h1 className="text-red-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold absolute bg-black/40 rounded py-1 px-4 
      bottom-4 sm:bottom-8 text-center w-11/12 sm:w-auto">
        Corpo de Bombeiros Militar do Ceará - 1ª Cia / 4º BBM de Crateús
      </h1>
    </div>
  );
};