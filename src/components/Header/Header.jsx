import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header className="w-full h-[510px] bg-cover bg-top bg-[url('http://vote411-prod.s3.amazonaws.com/s3fs-public/2019-07/HomepageHero_blurred_lowres.jpg')]">
      <div className="w-full h-full bg-gradient-to-r from-[#0d2330] opacity-90">
        <div className="max-w-[1300px] w-full h-full mx-auto flex items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col pb-10"
          >
            <span className="text-7xl font-semibold text-white uppercase tracking-tight">
              Election <br /> Information <br />{" "}
              <span className="text-[#fec40e]">You Need</span>
            </span>
            <span className="text-white">
              Brought to you by the League of <br /> Women Voters Education Fund
            </span>
          </motion.div>
          <div className="flex w-full justify-end text-white pb-10 gap-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center bg-gredient p-10 rounded-md card"
            >
              <div className="">
                <img
                  src="http://vote411-prod.s3.amazonaws.com/s3fs-public/2019-08/icon-register.png"
                  alt=""
                  className="img"
                />
              </div>
              <span className="text-xl">Register to Vote</span>
              <div className="pt-16 flex w-full justify-end items-center card-logo gap-5 transition-all">
                <span className="underline hidden">Learn More</span>
                <div className="size-8 flex items-center duration-300 justify-center bg-white hover:bg-[#fec40e] rounded-full">
                  <MdArrowOutward color="black" size={23} />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col items-center bg-gredient p-10 rounded-md card"
            >
              <div className="">
                <img
                  src="http://vote411-prod.s3.amazonaws.com/s3fs-public/2019-08/icon-register.png"
                  alt=""
                  className="img"
                />
              </div>
              <span className="text-xl">Register to Vote</span>
              <div className="pt-16 flex w-full justify-end items-center card-logo gap-5 transition-all">
                <span className="underline hidden">Learn More</span>
                <div className="size-8 flex items-center duration-300 justify-center bg-white hover:bg-[#fec40e] rounded-full">
                  <MdArrowOutward color="black" size={23} />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col items-center bg-gredient p-10 rounded-md card"
            >
              <div className="">
                <img
                  src="http://vote411-prod.s3.amazonaws.com/s3fs-public/2019-08/icon-register.png"
                  alt=""
                  className="img"
                />
              </div>
              <span className="text-xl">Register to Vote</span>
              <div className="pt-16 flex w-full justify-end items-center card-logo gap-5 transition-all">
                <span className="underline hidden">Learn More</span>
                <div className="size-8 flex items-center duration-300 justify-center bg-white hover:bg-[#fec40e] rounded-full">
                  <MdArrowOutward color="black" size={23} />
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
