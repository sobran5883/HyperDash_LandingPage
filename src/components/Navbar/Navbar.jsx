import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Drawer } from 'antd';
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";

const NavbarLeft = [
  {
    id: 1,
    title: "Air X",
    path: "/airx",
  },
  {
    id: 2,
    title: "Lexo Z",
    path: "/lexoz",
  },
  {
    id: 3,
    title: "Gravity 9",
    path: "/gravity9",
  }
];
const NavbarRight = [
  {
    id: 1,
    title: "Shop",
    path: "/shop",
  },
  {
    id: 2,
    title: "Account",
    path: "/account",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? "backdrop-blur-sm bg-[rgba(55,49,49,0.2)]" : "bg-[#1A1A1A]"} fixed w-full z-50`}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container my-4 lg:my-6 flex justify-between items-center"
      >
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarLeft.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  className="inline-block text-base font-normal px-3 text-[#FFFFFF] hover:text-[#FCDC55] relative group"
                >
                  <div className="w-9/12 h-[2px] bg-[#FCDC55] absolute mt-4 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo section */}
        <div>
          <NavLink to="/"><img src={logo} alt="logo" className="h-6"/></NavLink>
        </div>

        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarRight.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  className="inline-block text-base font-normal px-3 text-[#FFFFFF] hover:text-[#FCDC55] relative group"
                >
                  <div className="w-9/12 h-[2px] bg-[#FCDC55] absolute mt-4 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </NavLink>
              </li>
            ))}
          <div className="cursor-pointer ml-3 hover:text-[#FCDC55]">
            <IoMdMenu onClick={() => setOpenDrawer(true)} className="text-3xl text-[#FFFFFF]" />
          </div>
          </ul>
        </div>
        
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden cursor-pointer hover:text-[#FCDC55]">
          <IoMdMenu onClick={() => setOpenDrawer(true)} className="text-3xl text-white" />
        </div>
      </motion.div>
      <Drawer
          className="custom-drawer"
          rootClassName="custom-drawer"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <ul className="font-semibold text-lg w-full">
            {NavbarLeft.map((menu) => (
              <li key={menu.id} className="mt-8 w-full">
                <NavLink
                  to={menu.path}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full font-light text-white hover:text-[#FCDC55]"
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
            {NavbarRight.map((menu) => (
              <li key={menu.id} className="mt-8 w-full">
                <NavLink
                  to={menu.path}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full font-light text-white hover:text-[#FCDC55]"
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </Drawer>

    </nav>
  );
};

export default Navbar;
