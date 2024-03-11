import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 bg-transparent z-[1]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-[1300px] w-full mx-auto flex items-center justify-between py-5"
      >
        <div className="gap-5 flex w-full">
          <img
            src="https://www.vote411.org/themes/basic/images/source/Vote411-logo_web_darkbg.svg"
            alt=""
            className="w-[200px]"
          />
        </div>

        <div className="flex items-center gap-5 w-full justify-end">
          <button className="px-7 rounded-full py-2 text-lg text-white font-semibold glass hover:text-black transition-all duration-300">
            Register for vote
          </button>
          <NavLink to='/state' className="px-7 rounded-full py-2 text-lg text-white font-semibold glass hover:text-black transition-all duration-300">
            State
          </NavLink>
          <NavLink to='/' className="px-7 rounded-full py-2 text-lg text-white font-semibold glass hover:text-black transition-all duration-300">
            Home
          </NavLink>
          <button className="px-7 rounded-full py-2 text-lg font-semibold glass text-white hover:text-black transition-all duration-300">
            Donate
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
