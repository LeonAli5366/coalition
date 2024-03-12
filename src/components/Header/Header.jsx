import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { GiTargetShot } from "react-icons/gi";
import { FaHandshake, FaInfoCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header className="w-full h-[560px] bg-cover bg-top bg-[url('https://static.wixstatic.com/media/02c388_efd328038d4c4006b7f55da2aecf7ae3~mv2.png/v1/fill/w_1728,h_551,al_c,q_90,enc_auto/02c388_efd328038d4c4006b7f55da2aecf7ae3~mv2.png')]">
      {/* bg gredient */}
      <div className="w-full h-full bg-gradient-to-r from-[#0d2330] opacity-90">
        {/* header content */}
        <div className="max-w-[1300px] w-full h-full mx-auto flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col pb-10 w-full"
          >
            {/* left side */}
            <div className="flex flex-col items-start w-full text-7xl font-semibold text-white uppercase tracking-tight">
              <span>EQUAL COPAYS</span>
              <span>EQUAL CARE</span>
              <span className="text-[#fec40e]">EQUAL ACCESS</span>
            </div>
            <span className="text-white">For All Medicare Beneficiaries</span>
          </motion.div>
          {/* right side */}
          <div className="flex w-full justify-between text-white pb-10 gap-5">
            {/* right side item 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-col items-center justify-center bg-gredient rounded-md card gap-2 py-7"
            >
              <GiTargetShot size={100} />
              <span className="text-xl font-medium uppercase tracking-tight">
                Take Action
              </span>
              <div className="flex w-full items-center justify-center card-logo gap-5 transition-all">
                <span className="underline">Learn More</span>
                <div className="size-5 flex items-center duration-300 justify-center bg-white hover:bg-[#fec40e] rounded-full">
                  <MdArrowOutward color="black" size={13} />
                </div>
              </div>
            </motion.div>
            {/* right side item 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full flex flex-col items-center justify-center bg-gredient rounded-md card gap-2 py-7"
            >
              <FaHandshake size={100} />
              <span className="text-xl font-medium uppercase tracking-tight">
                Join the cause
              </span>
              <div className="flex w-full items-center justify-center card-logo gap-5 transition-all">
                <span className="underline">Learn More</span>
                <div className="size-5 flex items-center duration-300 justify-center bg-white hover:bg-[#fec40e] rounded-full">
                  <MdArrowOutward color="black" size={13} />
                </div>
              </div>
            </motion.div>
            {/* right side item 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full flex flex-col items-center justify-center bg-gredient rounded-md card gap-2 py-7"
            >
              <FaInfoCircle size={100} />
              <span className="text-xl font-medium uppercase tracking-tight">
                get informed
              </span>
              <div className="flex w-full items-center justify-center card-logo gap-5 transition-all">
                <span className="underline">Learn More</span>
                <div className="size-5 flex items-center duration-300 justify-center bg-white hover:bg-[#fec40e] rounded-full">
                  <MdArrowOutward color="black" size={13} />
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
