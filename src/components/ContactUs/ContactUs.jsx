import { useState } from "react";
import ToggleContactBtn from "./ToggleContactBtn";
import { motion } from "framer-motion";

const ContactUs = () => {
  const variant = {
    open: {
      scale: 1,
      opacity: 1,
      x:0,
      y:0
    },
    closed: {
      scale: 0,
      opacity: 0,
      x:200,
      y:200
    },
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        animate={open ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
        variants={variant}
        className="fixed w-[500px] h-[520px] bottom-20 right-20 bg-[#0b3f63] rounded-md z-[100] flex flex-col items-center p-12 text-white gap-5"
      >
        <span className="text-xl font-semibold">Send Us Your Question</span>
        <div className="w-full flex flex-col">
            <label htmlFor="name" className="font-medium after:content-['*'] after:text-red-500 after:pl-1">Name</label>
            <input type="text" name="" id="name" placeholder="Name" className="w-full placeholder:italic py-2 outline-none border-rgb bg-transparent px-2"/>
        </div>
        <div className="w-full flex flex-col">
            <label htmlFor="email" className="font-medium after:content-['*'] after:text-red-500 after:pl-1">Email</label>
            <input type="text" name="" id="email" placeholder="Email" className="w-full placeholder:italic py-2 outline-none border-rgb bg-transparent px-2"/>
        </div>
        <div className="w-full flex flex-col">
            <label htmlFor="description" className="font-medium after:content-['*'] after:text-red-500 after:pl-1">Description</label>
            <textarea name="" id="description" placeholder="Description" className="w-full placeholder:italic py-2 outline-none border-rgb bg-transparent px-2"/>
        </div>
        <div className="w-full flex justify-end">
        <button className=" px-7 py-2 font-medium buttonEffect rounded-md">Send</button>
        </div>
      </motion.div>
      <ToggleContactBtn setOpen={setOpen} open={open} />
    </>
  );
};

export default ContactUs;
