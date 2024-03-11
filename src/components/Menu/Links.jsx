import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  return (
    <div className="max-w-[1300px] w-full h-full mx-auto flex justify-between gap-10 pt-[170px]">
      {/* col 1 */}
      <motion.div variants={variants} className="flex flex-col w-full">
        <span className="text-lg text-[#fec40e]">VOTING IN MY STATE</span>
        <motion.select variants={itemVariants} name="" id="" className="w-full py-4"></motion.select>
        <Link className="pt-4 flex gap-1" id="link">
          <motion.span variants={itemVariants}>Compare State Issues</motion.span>
          <motion.div variants={itemVariants} className="bg-white p-1 rounded-full" id="icon2">
            <MdArrowOutward color="black" size={15} />
          </motion.div>
        </Link>
      </motion.div>

      {/* col 2 */}
      <motion.div variants={variants} className="flex flex-col w-full">
        <span className="text-lg text-[#fec40e]">VOTER REGISTRATION</span>
        <Link
          className="w-full py-3 border-b border-slate-600 hover:bg-[#0a3a5a] px-2 flex items-center justify-between"
          id="link"
        >
          <motion.span variants={itemVariants}>Registration Deadlines</motion.span>
          <motion.MdArrowOutward variants={itemVariants} color="#fec40e" size={23} id="icon" />
        </Link>
        <span
          className="w-full py-3 border-b border-slate-600 hover:bg-[#0a3a5a] px-2 flex items-center justify-between"
          id="link"
        >
          <motion.span variants={itemVariants}>Register to Vote</motion.span>
          <motion.MdArrowOutward variants={itemVariants} color="#fec40e" size={23} id="icon" />
        </span>
      </motion.div>

      {/* col3 */}
      <motion.div variants={variants} className="flex flex-col w-full">
        <span className="text-lg text-[#fec40e]">VOTER GUIDES</span>
        <span
          className="w-full py-3 border-b border-slate-600 hover:bg-[#0a3a5a] px-2 flex items-center justify-between"
          id="link"
        >
          <motion.span variants={itemVariants}>Candidate and Ballot Measure Information</motion.span>
          <motion.MdArrowOutward variants={itemVariants} color="#fec40e" size={26} id="icon" />
        </span>
        <span
          className="w-full py-3 border-b border-slate-600 hover:bg-[#0a3a5a] px-2 flex items-center justify-between"
          id="link"
        >
          <motion.span variants={itemVariants}>First Time Voter Checklist</motion.span>
          <motion.MdArrowOutward variants={itemVariants} color="#fec40e" size={23} id="icon" />
        </span>
        <span
          className="w-full py-3 border-b border-slate-600 hover:bg-[#0a3a5a] px-2 flex items-center justify-between"
          id="link"
        >
          <motion.span variants={itemVariants}>Healthy Voting Checklist</motion.span>
          <motion.MdArrowOutward color="#fec40e" size={23} id="icon" />
        </span>
        <span
          className="w-full py-3 border-b border-slate-600 hover:bg-[#0a3a5a] px-2 flex items-center justify-between"
          id="link"
        >
          <motion.span variants={itemVariants}>Nationwide Voting Rules Quick View</motion.span>
          <motion.MdArrowOutward color="#fec40e" size={23} id="icon" />
        </span>
      </motion.div>

      {/* col 4 */}
      <motion.div variants={variants} className="flex flex-col w-full">
        <span className="text-lg text-[#fec40e]">ABOUT VOTE411</span>
        <span
          className="w-full py-3 border-b border-slate-600 hover:bg-[#0a3a5a] px-2 flex items-center justify-between"
          id="link"
        >
          <motion.span variants={itemVariants}>About</motion.span>
          <motion.MdArrowOutward variants={itemVariants} color="#fec40e" size={23} id="icon" />
        </span>
        <span
          className="w-full py-3 border-b border-slate-600 hover:bg-[#0a3a5a] px-2 flex items-center justify-between"
          id="link"
        >
          <motion.span variants={itemVariants}>Sponsors and Partnerships</motion.span>
          <motion.MdArrowOutward variants={itemVariants} color="#fec40e" size={23} id="icon" />
        </span>
        <span
          className="w-full py-3 border-b border-slate-600 hover:bg-[#0a3a5a] px-2 flex items-center justify-between"
          id="link"
        >
          <motion.span variants={itemVariants}>Support VOTE411</motion.span>
          <motion.MdArrowOutward variants={itemVariants} color="#fec40e" size={23} id="icon" />
        </span>
      </motion.div>
    </div>
  );
};

export default Links;
