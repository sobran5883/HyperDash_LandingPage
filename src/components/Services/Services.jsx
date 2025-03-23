import React from "react";
import { motion } from "framer-motion";
import Design from "../../assets/Interiors Img.png";
import Performance from "../../assets/Performance Img.png";
import Interiors from "../../assets/Interiors Img.png";
import sustainable from '../../assets/Sustainable img.png'
import airx from '../../assets/Air X img.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import rightLarge from '../../assets/imgRightLarge.png'
import fullImg from '../../assets/Air X Img1.png.png'
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const ServicesData = [
  {
    id: 1,
    title: "Impeccable Design",
    img: Design,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Elevated Performance",
    img: Performance,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Great interiors",
    img: Interiors,
    delay: 0.4,
  },
];

const stats=[
  {
      title:"Max Power",
      num:1200,
      text:"hp",
  },
  {
      title:"EPA estimated range up to",
      num:516,
      text:"mi",
  },
  {
      title:"minutes to charge 200 miles",
      num:12,
      text:"mins",
  },
  {
      title:"0-60 mph",
      num:2,
      text:"sec",
  },
]

const SlideLeft = (delay) => ({
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const Services = () => {
  return (
    <section id="services" className="bg-[#1A1A1A]">
      {/* stats  */}
      <div>
        <div className="container mx-auto px-4 py-20">
          <div className="grid text-center grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {stats.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });
            return (
              <div
                key={index}
                ref={ref}
                className="flex-1 flex flex-col text-[#FFFFFA] gap-4"
              >
                <p className="text-xs">
                  {item.title}
                </p>
          
                {isInView && (
                  item.title === "0-60 mph" ? (
                    <p className="text-4xl xl:text-6xl">{'<2'}</p>
                  ) : (
                    <CountUp
                      end={item.num}
                      duration={2.5}
                      suffix={item.title === "Max Power" ? "+" : ""}
                      className="text-4xl xl:text-6xl"
                    />
                  )
                )}
          
                <p className='text-2xl xl:text-4xl font-thinf'>
                  {item.text}
                </p>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {/* row of three images */}
      <div className="container mx-auto px-4 pb-14 pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={service.img}
                alt={service.title}
                className="object-contain md:mb-4"
              />
              <h2 className="text-xl md:text-2xl text-[#FFFFFB] px-3">
                {service.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* drive to a sustainable future */}
      <div className="container flex flex-col lg:flex-row justify-between gap-4 my-8">
        <div className="hidden lg:block">
          <img src={sustainable} alt="" />
        </div>
        <div className="flex flex-col text-[#FFFFFB] gap-6">
          <img src={airx} alt="" />
          <h1 className="text-xl">Drive to a sustainable future</h1>
          <p className="text-sm w-9/12">Lorem ipsum dolor sit amet, ok if fundtionsl consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
        </div>
      </div>

      {/* 5Images */}
      <div className="container flex flex-col md:flex-row justify-between gap-2 md:gap-8 my-16">
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 lg:gap-y-6 lg:gap-x-12">  
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={rightLarge} alt="" />
        </div>
      </div>

      {/* Air X */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${fullImg})`,
            backgroundSize: 'cover',
            filter: 'brightness(0.7)'
          }}
        />
        {/* Content Container */}
        <div className="container gap-4 relative h-screen flex flex-col items-start justify-end py-20 text-[#FFFFFB]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="text-left space-y-4 lg:max-w-[450px]">
                <h1 className="text-2xl md:text-5xl font-normal">Air X</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="text-left space-y-4 lg:max-w-[450px]">
                <h1 className="text-xl md:text-3xl font-light">Accelerate into a New Era </h1>
              </div>
            </motion.div>
            <motion.div
                variants={FadeUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                className="mb-8"
            >
            <div className="flex gap-2 text-[#FFFFFB] mt-2">
              <button className='md:text-lg font-light border border-gray-500 px-6 py-2 hover:bg-[#FFFFFB] hover:text-[#1A1A1A] hover:border-[#FFFFFB] transition-all duration-300'>Order Now</button>
              <button className='md:text-lg font-light border border-gray-500 px-6 py-2 hover:bg-[#FFFFFB] hover:text-[#1A1A1A] hover:border-[#FFFFFB] transition-all duration-300'>Learn More</button>
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
