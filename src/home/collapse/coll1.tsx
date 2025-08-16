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
        className={`w-full h-12 relative flex justify-center items-center transition-all ease-in-out duration-500 bg-red-400 cursor-pointer ${
          collapse ? "rounded-xl" : "rounded-t-xl"
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
        className={`w-full rounded-b-xl flex justify-center items-center bg-white overflow-hidden ${
          collapse ? "h-0" : "h-20"
        } transition-all ease-in-out duration-500`}
      >
        <AnimatePresence>
          {!collapse && (
            <motion.p
              className="w-full px-4 text-lg text-justify text-black"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {conteudo}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};