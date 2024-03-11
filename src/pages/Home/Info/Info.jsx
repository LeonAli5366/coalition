/* eslint-disable react/jsx-key */
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const list = [
  "See What's On Your Ballot",
  "Check Your Voter Registration",
  "Find Your Polling Place",
  "Discover Upcoming Debates In Your Area",
  "And Much More!",
];
const Info = () => {
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
            Have Your Candidates Answered our Questions?
          </span>
          <span>If not, see how you can help!</span>
          <span className="text-sm text-[#098ea7]">Find out</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="max-w-[1300px] w-full mx-auto flex justify-between my-10 ring-gredient p-10"
      >
        {/* left side */}
        <div className="flex flex-col gap-5 w-full">
          <span className="text-5xl uppercase tracking-tighter font-semibold text-white">
            Personalized Voting <br /> Information
          </span>
          <div className="flex flex-col gap-2">
            {list.map((li) => (
              <div className="flex items-center pl-10 gap-3">
                <div className="size-10 rounded-full flex items-center justify-center glassEffect">
                  <FaCheck color="green" size={22} />
                </div>
                <span className="text-white">{li}</span>
              </div>
            ))}
          </div>
        </div>

        {/* right side */}
        <div className="w-full flex flex-col gap-5 text-white">
          <span className="text-lg font-medium">
            Enter Your Address to Get Started:
          </span>
          <input
            type="text"
            placeholder="Street Address"
            className="w-full py-3 bg-transparent border-rgb px-3 placeholder:italic outline-none"
          />
          <div className="flex items-center w-full gap-7">
            <input
              type="text"
              placeholder="City"
              className="w-[60%] py-3 border-rgb bg-transparent px-3 placeholder:italic outline-none"
            />
            <select
              name=""
              id=""
              className="w-[40%] py-3 border-rgb bg-transparent px-3"
            >
              Select a state
            </select>
          </div>
          <div className="w-full flex justify-start">
            <input
              type="text"
              placeholder="Zip Code"
              className="w-[65%] bg-transparent border-rgb py-3 px-3 placeholder:italic outline-none"
            />
          </div>
          <div className="flex justify-end pt-10">
            <button className="glass px-7 py-2 rounded-full">Submit</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
