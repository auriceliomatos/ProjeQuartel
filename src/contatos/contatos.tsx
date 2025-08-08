// Importing components
import { Menu } from "../menu/menu";
import { Footer } from "../foot/foot";
import { Borda } from "../home/borda/borda";
import { Psbs } from "./projeto/psbs";
import { Jbv } from "./projeto/jbv";

export const Contatos = () => {
  return (
    <>
      <div className="items-center justify-center">
        <div className="w-full">
          <Menu />
        </div>

        <div className="w-full">
          <Psbs />
        </div>

        <div className="w-full">
          <Borda />
        </div>

        <div className="w-full">
          <Jbv />
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};
