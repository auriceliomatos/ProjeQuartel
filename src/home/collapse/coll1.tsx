import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

interface Coll1Props {
  titulo: string;
  conteudo: string;
}

export const Coll1 = ({ titulo, conteudo }: Coll1Props) => {   
  const [collapse, setCollapsed] = useState(true);
  
  return (
    <div className="w-full h-full flex flex-col">
      <div
        className={`w-200 h-12 relative flex justify-center items-center transition-all ease-in-out duration-500 bg-red-400 cursor-pointer ${
          collapse ? "delay-200 rounded-xl" : "rounded-t-xl"
        }`}
        onClick={() => setCollapsed(!collapse)}
      >
        <p className="font-bold text-2xl">
          {titulo}
        </p>
        <MdOutlineArrowBackIosNew
          className={`text-2xl absolute right-5 transition-all ease-in-out duration-500 ${
            collapse ? "rotate-90" : "-rotate-90"
          }`}
        />
      </div>

      <div
        className={`w-200 rounded-b-xl flex justify-center items-center bg-white ${
          collapse ? "h-0" : "delay-200 h-20"
        } transition-all ease-in-out duration-400`}
      >
        <AnimatePresence>
          {!collapse && (
            <motion.p
              className="w-190 text-1xl text-justify text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              transition={{ delay: 0.5 }}
            >
              {conteudo}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};