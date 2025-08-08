import img from '../../assets/q15.jpeg'
import fundo from '../../assets/f12.png'

export const Historia = () => {
    return (
        <div className="w-full h-100 font-serif bg-gray-900 sm:h-120 " >

            <div className="w-full flex  justify-center md:items-start md:justify-center">
                <h1 className="text-white m-2 lg:text-3xl text-center md:text-2xl md:p-2 ">
                    1ª Cia / 4º BBM de CRATEÚS
                    </h1>
            </div>

            <div className="flex flex-col items-center md:flex-row  md:items-start ">

                <div className="w-250  mr-2 flex justify-center sm:h-70 sm:w-120 md:m-2 lg:w-250  
                
                ">
                    <img
                        src={img}
                        alt="logo"
                        className="lg:w-200 lg:h-70 border-white border-2 object-cover rounded-lg sm:h-60 md:h-50 md:mt-10 sm:w-130 sm:mt-4
                        
                        "
                    />
                </div>

                <div className="w-full h-70 flex items-center sm:h-30 md:h-60 md:mt-2 " >

                    <p className="text-white w-200 text-1xl text-justify m-2 md:m-2 sm:m-2 sm:mt-2 font-semibold tracking-wide">
                        Foi inaugurada no dia 06 de julho de 1999 sob o Comando do CAP QOBM Anderson Alves Viana, contando na época com um efetivo de 23 (vinte e três) profissionais prontamente qualificados nas diversas áreas (Combate a Incêndio, Salvamentos e APH). Atualmente situado no aeroporto da cidade.
                    </p>
                </div>

            </div>

        </div>
    )
}