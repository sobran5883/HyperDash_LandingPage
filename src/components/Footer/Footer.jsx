import React from "react";
import { motion } from "framer-motion";
import left from '../../assets/left-arrow.png'

const Footer = () => {
  return (
    <footer className="py-28 bg-[#1A1A1A]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="border-b-2  w-fit pb-2">
          <h1 className="text-[#FFFFFA] text-2xl md:text-4xl mb-10">Subscribe to our newsletter</h1>
          <div className="flex items-center justify-between pr-8  pb-2">
            <input type="text" placeholder="enter your email" className="bg-[#1A1A1A] w-full placeholder-[#808080] focus:outline-none text-white"/>
            <img src={left} alt="" className="h-4 cursor-pointer"/>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-28">
          {/* first section */}
          <div className="w-full md:w-6/12 grid grid-cols-2 gap-4 md:gap-8 mb-20 md:mb-0">
            <h1 className="font-normal text-xl hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Air X</h1>
            <h1 className="font-normal text-xl hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Fleet</h1>
            <h1 className="font-normal text-xl hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Lexo Z</h1>
            <h1 className="font-normal text-xl hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Company</h1>
            <h1 className="font-normal text-xl hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Gravity 9  </h1>
            <h1 className="font-normal text-xl hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Stories</h1>
          </div>
          {/* second section */}  
          <div className="w-full md:w-4/12 grid grid-cols-2 gap-6 md:gap-8">
            <h1 className="font-light text-sm hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Purchasing</h1>
            <h1 className="font-light text-sm hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Spaces</h1>
            <h1 className="font-light text-sm hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Charging</h1>
            <h1 className="font-light text-sm hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Investors</h1>
            <h1 className="font-light text-sm hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Insurance</h1>
            <h1 className="font-light text-sm hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Career</h1>
            <h1 className="font-light text-sm hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Service</h1>
            <h1 className="font-light text-sm hover:text-[#FCDC55] text-[#FFFFFA] cursor-pointer">Contact Us</h1>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
