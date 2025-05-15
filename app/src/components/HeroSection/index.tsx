import AddCoinsButton from "./AddCoinsButton";
import CashSplashAddress from "./CashSplashAddress";
import PlayButton from "./PlayButton";

const HeroSection = () => {
  return (
    <div className="text-accent text-center mt-5 md:mt-10">
      <h2 className="font-bold text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h2>
      <p className="text-light my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
        iure, sapiente repudiandae debitis fugiat totam reprehenderit ducimus
        dolorum praesentium dignissimos quae quas esse labore! Fugiat dolores
        obcaecati soluta tempora facere!
      </p>
      <CashSplashAddress />
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-12">
        <AddCoinsButton />
        <PlayButton />
      </div>
    </div>
  );
};

export default HeroSection;
