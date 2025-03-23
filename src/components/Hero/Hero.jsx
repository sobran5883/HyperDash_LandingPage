import HeroImg from "../../assets/HeroImg.png";
import { motion } from "framer-motion";


export const FadeUp = () => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: 'cover',
          filter: 'brightness(0.7)'
        }}
      />

      {/* Content Container */}
      <div className="relative h-screen flex flex-col items-center justify-end p-8">
        <motion.div
          variants={FadeUp()}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <button className="text-white border-2 text-xs border-white bg-transparent hover:bg-[#FCDC55] hover:text-black hover:border-[#FCDC55] transition-all duration-300 py-2 px-6">
            Test Drive
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
