import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 bg-gredient left-0 z-[1]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-[1300px] w-full mx-auto flex items-center justify-between py-5"
      >
        <div className="gap-5 flex">
          <img
            src="https://static.wixstatic.com/media/02c388_b25bb318c820493193565e1d2f514a6e~mv2.png/v1/fill/w_234,h_64,al_c,q_85,enc_auto/02c388_b25bb318c820493193565e1d2f514a6e~mv2.png"
            alt=""
            className="w-[200px]"
          />
        </div>

        <div className="flex items-center gap-5 w-full justify-end">
          <NavLink
            to="/"
            className="px-7 rounded-full py-2 text-lg text-white font-semibold glass hover:text-black transition-all duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="px-7 rounded-full py-2 text-lg text-white font-semibold glass hover:text-black transition-all duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to="/getinformed"
            className="px-7 rounded-full py-2 text-lg text-white font-semibold glass hover:text-black transition-all duration-300"
          >
            Get Informed
          </NavLink>
          <button className="px-7 rounded-full py-2 text-lg font-semibold glass text-white hover:text-black transition-all duration-300">
            Take Action
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
