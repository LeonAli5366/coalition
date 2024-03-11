import { motion } from "framer-motion";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import Links from "./Links";

const variants = {
  open: {
    clipPath: "circle(2500px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-black text-white"
    >
      <motion.div
        variants={variants}
        className="absolute w-full h-[510px] top-0 left-0 bottom-0 bg-[#0b3f63] z-[100]"
      >
        <Links />
      </motion.div>

      {/* toggle button */}
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Menu;
