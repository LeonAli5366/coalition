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
      className="buttonEffect size-16 rounded-full flex items-center justify-center fixed bottom-24 right-24 z-[100]"
    >
      {open ? (
        <GiCrossMark size={20} color="green" />
      ) : (
        <FaPaperPlane color="green" size={20} />
      )}
    </motion.button>
  );
};

export default ToggleContactBtn;
