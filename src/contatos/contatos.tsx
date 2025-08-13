// Importing components
import { Menu } from "../menu/menu";
import { Footer } from "../foot/foot";
import { Borda } from "../home/borda/borda";
import { SliderPsbs } from "./projeto/sliderPsbs";
import { SliderJbv } from "./projeto/sliderJbv";

export const Contatos = () => {
  return (
    <>
      <div className="items-center justify-center">
        <div className="w-full">
          <Menu />
        </div>

        <div className="w-full">
          <SliderPsbs />
        </div>

        <div className="w-full">
          <Borda />
        </div>

        <div className="w-full">
          <SliderJbv />
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};
