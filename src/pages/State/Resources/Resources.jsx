import { motion } from "framer-motion";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const Resources = () => {
  return (
    <div className="w-full bg-gredient text-white py-5">
      <div className="max-w-[1300px] w-full mx-auto flex flex-col items-start px-5">
        <span className="text-xl font-semibold tracking-tight uppercase">
          More Resources
        </span>
        <div className="w-full rounded-md flex items-center justify-between bg-[#0a3a5a] px-10 py-4">
          <div className="flex items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 150 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-slate-300 rounded-full"
            >
              <img
                src="https://www.vote411.org/themes/basic/images/ballot-icon.png"
                alt=""
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 150,
                  delay: 0.3,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Find what&apos;s on your Ballot
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 150,
                  delay: 0.6,
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-sm text-cyan-400 hover:underline flex items-center gap-1"
              >
                Learn more
                <FaSquareArrowUpRight size={22} />
              </motion.span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 150,
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-slate-300 rounded-full"
            >
              <img
                src="https://www.vote411.org/themes/basic/images/location-icon.png"
                alt=""
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 150,
                  delay: 0.6,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Find your Polling Place
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 150,
                  delay: 0.9,
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-sm text-cyan-400 hover:underline flex items-center gap-1"
              >
                Learn more
                <FaSquareArrowUpRight size={22} />
              </motion.span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 150,
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-slate-300 rounded-full"
            >
              <img
                src="https://www.vote411.org/themes/basic/images/computer-cta-icon.svg"
                alt=""
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 150,
                  delay: 1.2,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Register to vote in Washington
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 150,
                  delay: 1.5,
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-sm text-cyan-400 hover:underline flex items-center gap-1"
              >
                Learn more
                <FaSquareArrowUpRight size={22} />
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
