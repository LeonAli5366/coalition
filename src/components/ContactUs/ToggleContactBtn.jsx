import { FaPaperPlane } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GiCrossMark } from "react-icons/gi";
const ToggleContactBtn = ({ setOpen, open }) => {
  const variants = {
    open: {
      rotate: 0,
    },
    closed: {
      rotate: 360,
    },
  };
  return (
    <motion.button
      onClick={() => setOpen((prev) => !prev)}
      animate={open ? "open" : "closed"}
      transition={{ duration: 1, type: "spring", stiffness: 150 }}
      variants={variants}
      className="buttonEffect sm:size-16 size-12 rounded-full flex items-center justify-center fixed sm:bottom-24 sm:right-24 bottom-5 right-5 z-[100]"
    >
      {open ? (
        <GiCrossMark className="sm:text-[20px] text-[16px]" color="green" />
      ) : (
        <FaPaperPlane color="green" className="sm:text-[20px] text-[16px]" />
      )}
    </motion.button>
  );
};

export default ToggleContactBtn;
