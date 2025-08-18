import img from '../../assets/q15.jpeg'


export const Historia = () => {
    return (
        <div className="w-full h-400 font-serif bg-gray-900 sm:h-120 " >

            <div className="  flex items-center">

                <div className=" items-center m-3 w-200" >
                <h1 className="text-white m-2 lg:text-3xl text-center md:text-2xl md:p-2 ">
                    2ª Cia / 4º BBM de CRATEÚS
                </h1>
                    <p className="text-white text-2xl text-justify mt-6">
                        Foi inaugurada no dia 06 de julho de 1999 sob o Comando do CAP QOBM Anderson Alves Viana, contando na época com um efetivo de 23 (vinte e três) profissionais prontamente qualificados nas diversas áreas (Combate a Incêndio, Salvamentos e APH). Atualmente situado no aeroporto da cidade.
                    </p>
                </div>

                 <div className="w-200  m-7 justify-center
                 outline-white ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white hover:scale-105 ">
                    <img
                        src={img}
                        alt="logo"
                        className="w-200 border-white border-2 object-cover rounded-lg "/>
                </div>

            </div>

        </div>
    )
}