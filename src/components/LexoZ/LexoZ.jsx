
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

      <div className="relative bg-[#FFFFFB] text-[#FFFFFB] md:text-[#1A1A1A] flex items-center justify-between">
        <div className='flex z-10 flex-col items-start justify-center p-4 md:p-20 space-y-4 h-screen bg-[#222222d1] md:bg-[#ffffff00] w-full'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-left space-y-4 lg:max-w-[450px]">
              <h1 className="text-2xl md:text-6xl font-semibold">Air X</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-left space-y-4 lg:max-w-[450px] mb-6">
              <h1 className="text-xl md:text-3xl font-semibold">Accelerate into a New Era </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-left space-y-4 md:w-6/12">
              <h1 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem. ea culpa ecosystem etp lisered</h1>
            </div>
          </motion.div>
          <motion.div
              variants={FadeUp()}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8"
          >
            <div className="flex gap-4 mt-10">
              <button className='bg-[#1A1A1A] text-white text-sm md:text-2xl font-light px-6 py-2'>Order Now</button>
              <button className='text-sm md:text-2xl font-normal px-6 py-2'>Learn More</button>
            </div>
          </motion.div>
        </div>
          <div className="absolute right-0 bottom-0 md:-bottom-28 w-full h-full">
            <img src={carImg2} alt="" className="w-full h-full object-cover"/>
          </div>
      </div>

      <div className="relative bg-black text-[#FFFFFB] flex items-center justify-end height-screen w-full">
        <div className="absolute left-0 top-0 bottom-0 w-full h-full">
          <img src={carImg3} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className='flex z-10 flex-col items-center md:items-start justify-center md:p-20 space-y-4 h-screen w-full lg:w-6/12'>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-left space-y-4  lg:max-w-[450px] mb-6">
              <h1 className="text-xl md:text-2xl font-light">Model Air X Specifications</h1>
            </div>
          </motion.div>
          <div className='grid grid-cols-2 gap-x-16 gap-y-6 md:gap-y-12 md:gap-x-32'>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-extralight">Range (EPA est.)</h1>
                <h1 className="font-extralight">Up to 300 miles</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-extralight">Acceleration</h1>
                <h1 className="font-extralight">4.5s 0-60 mph</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-extralight">Peak Power</h1>
                <h1 className="font-extralight">400 hp</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-extralight">Wheels</h1>
                <h1 className="font-extralight">19&quot; or 20&quot;</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-extralight">Towing</h1>
                <h1 className="font-extralight">400 hp</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-extralight">Seating</h1>
                <h1 className="font-extralight">Up to 5</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-extralight">Drag Coefficient</h1>
                <h1 className="font-extralight">0.28 cd</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-extralight">Top Speed</h1>
                <h1 className="font-extralight">130 mph</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LexoZ
