/* eslint-disable react/jsx-key */
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const list = [
  "1-866-OUR-VOTE (866-687-8683) Call or text",
  "1-888-VE-Y-VOTA (en Español)",
  "1-888-API-VOTE (Asian multilingual assistance)",
  "1-844-YALLA-US (Arabic)",
];
const Plans = () => {
  return (
    <div className="bg-gredient w-full flex flex-col">
      <div className="w-full bg-gradient-to-r from-[#F04393] to-[#F9C449] mt-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true, amount:0.5}}
          transition={{ duration: 0.5 }}
          className="max-w-[1300px] w-full flex items-center py-5 mx-auto gap-3"
        >
          <img
            src="http://vote411-prod.s3.amazonaws.com/s3fs-public/2021-07/Action.png"
            alt=""
            className="w-7"
          />
          <span className="text-xl tracking-tighter uppercase font-medium text-white">
            Nationwide Voting Rules Quick View
          </span>
          <span>
            What voting options are available in your state, and how do those
            options compare to other states?
          </span>
          <span className="text-sm text-[#098ea7]">Click here!</span>
        </motion.div>
      </div>

      <div className="max-w-[1300px] mx-auto w-full flex justify-between p-14 gap-10">
        <div className="w-full h-[430px] relative">
          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{once:true, amount:0.5}}
            transition={{ duration: 1 }}
            className="bg-[#6e6da9] absolute top-0 left-0 w-[400px] h-[350px] z-10 flex flex-col items-start p-10 gap-5"
          >
            <span className="text-4xl text-white font-semibold tracking-tight">
              MAKE A VOTING PLAN TODAY!
            </span>
            <span className="text-white">Making Democracy Work</span>
            <button className="glass px-7 py-2 rounded-full font-medium text-white hover:text-black transition-all duration-300">
              Make your plan
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{once:true, amount:0.5}}
            transition={{ duration: 1 }}
            className="absolute bottom-0 right-14 w-[400px] h-[350px] bg-[url('http://vote411-prod.s3.amazonaws.com/s3fs-public/2019-07/First%20time%20voter%20background.png')] overflow-hidden "
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          viewport={{once:true, amount:0.5}}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full flex flex-col gap-5 ring-gredient p-10"
        >
          <span className="text-2xl text-white tracking-tight uppercase">
            Election Day Problems?
          </span>
          <span className="text-white">
            Report an election issue by calling:
          </span>
          <div className="flex flex-col gap-2">
            {list.map((li) => (
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full flex items-center justify-center glassEffect">
                  <FaCheck color="green" size={22} />
                </div>
                <span className="text-white">{li}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Plans;
