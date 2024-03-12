import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { GiTargetShot } from "react-icons/gi";
import { FaHandshake, FaInfoCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header className="w-full sm:h-[560px] h-[300px] bg-cover sm:bg-top bg-[url('https://static.wixstatic.com/media/02c388_efd328038d4c4006b7f55da2aecf7ae3~mv2.png/v1/fill/w_1728,h_551,al_c,q_90,enc_auto/02c388_efd328038d4c4006b7f55da2aecf7ae3~mv2.png')]">
      {/* bg gredient */}
      <div className="w-full h-full bg-gradient-to-r from-[#0d2330] opacity-90">
        {/* header content */}
        <div className="max-w-[1300px] w-full h-full mx-auto flex sm:flex-row flex-col items-end justify-between">
          <div className="flex flex-col sm:pb-10 sm:pl-0 pl-2 sm:pt-0 pt-2 w-full">
            {/* left side */}
            <div className="flex flex-col items-start w-full sm:text-7xl text-lg font-semibold text-white uppercase tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 200 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                EQUAL COPAYS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                  delay: 0.5,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                EQUAL CARE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                  delay: 1,
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-[#fec40e]"
              >
                EQUAL ACCESS
              </motion.span>
            </div>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                delay: 1.5,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-white sm:text-base text-xs"
            >
              For All Medicare Beneficiaries
            </motion.span>
          </div>
          {/* right side */}
          <div className="flex w-full justify-between text-white sm:pb-10 pb-5 sm:gap-5 gap-2 sm:px-0 px-2">
            {/* right side item 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 200 }}
              viewport={{ once: true, amount: 0.5 }}
              className="sm:w-full w-auto flex flex-col items-center justify-center bg-gredient rounded-md sm:size-auto size-[130px] card sm:gap-2 gap-1 sm:py-7"
            >
              <GiTargetShot className="sm:text-[100px] text-[40px]" />
              <span className="sm:text-xl text-sm font-medium uppercase tracking-tight">
                Take Action
              </span>
              <div className="flex w-full items-center justify-center card-logo sm:gap-5 gap-1 transition-all">
                <span className="underline sm:text-base text-xs">
                  Learn More
                </span>
                <div className="sm:size-5 size-3 flex items-center duration-300 justify-center bg-white hover:bg-[#fec40e] rounded-full">
                  <MdArrowOutward
                    color="black"
                    className="sm:text-[13px] text-[6px]"
                  />
                </div>
              </div>
            </motion.div>
            {/* right side item 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="sm:w-full w-auto flex flex-col items-center justify-center bg-gredient rounded-md sm:size-auto size-[130px] card sm:gap-2 sm:py-7"
            >
              <FaHandshake className="sm:text-[100px] text-[40px]" />
              <span className="sm:text-xl text-sm font-medium uppercase tracking-tight">
                Join the cause
              </span>
              <div className="flex w-full items-center justify-center card-logo sm:gap-5 gap-1 transition-all">
                <span className="underline sm:text-base text-xs">
                  Learn More
                </span>
                <div className="sm:size-5 size-3 flex items-center duration-300 justify-center bg-white hover:bg-[#fec40e] rounded-full">
                  <MdArrowOutward
                    color="black"
                    className="sm:text-[13px] text-[6px]"
                  />
                </div>
              </div>
            </motion.div>
            {/* right side item 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                delay: 1,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="sm:w-full w-auto flex flex-col items-center justify-center bg-gredient rounded-md sm:size-auto size-[130px] card sm:gap-2 sm:py-7"
            >
              <FaInfoCircle className="sm:text-[100px] text-[40px]" />
              <span className="sm:text-xl text-sm font-medium uppercase tracking-tight">
                get informed
              </span>
              <div className="flex w-full items-center justify-center card-logo sm:gap-5 gap-1 transition-all">
                <span className="underline sm:text-base text-xs">
                  Learn More
                </span>
                <div className="sm:size-5 size-3 flex items-center duration-300 justify-center bg-white hover:bg-[#fec40e] rounded-full">
                  <MdArrowOutward
                    color="black"
                    className="sm:text-[13px] text-[6px]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
