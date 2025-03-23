
import { motion } from 'framer-motion'
import carImg1 from '../../assets/Features 2.2 Image.png'
import carImg2 from '../../assets/Features 2.3 Img.png'
import carImg3 from '../../assets/Img.png'

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

function LexoZ() {
  return (
    <section>
      <div className="bg-[#1A1A1A] text-[#FFFFFB] flex items-center justify-between height-screen">
        <div className='flex flex-col items-start justify-center p-4 md:p-10 lg:p-20 space-y-4'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-left space-y-4 lg:max-w-[450px] md:mb-2">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-normal">Lexo Z</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-left space-y-4 lg:max-w-[450px] md:mb-6">
              <h1 className="text-xl md:2xl lg:text-3xl">Accelerate into a New Era </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-left space-y-4 lg:max-w-[450px]">
              <h1 className="font-extralight text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem. ea culpa ecosystem etp lisered</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-left space-y-4 lg:max-w-[450px]">
              <h1 className="font-extralight text-xs md:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis voluptatibus error, quasi nam vitae in.</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-left space-y-4 lg:max-w-[450px]">
              <h1 className="font-extralight text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid est quos minima aliquam ea culpa eos.</h1>
            </div>
          </motion.div>
          <motion.div
            variants={FadeUp()}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8"
          >
            <div className="flex gap-2 my-6 md:my-10">
              <button className='text-sm md:text-lg font-light border border-gray-500 px-6 py-2 hover:bg-[#FFFFFB] hover:text-[#1A1A1A] hover:border-[#FFFFFB] transition-all duration-300'>Order Now</button>
              <button className='text-sm md:text-lg font-light border border-gray-500 px-6 py-2 hover:bg-[#FFFFFB] hover:text-[#1A1A1A] hover:border-[#FFFFFB] transition-all duration-300'>Learn More</button>
            </div>
          </motion.div>
        </div>
          <div className="hidden md:block">
            <img src={carImg1} alt="" />
          </div>
      </div>
    </section>
  )
}

export default LexoZ
