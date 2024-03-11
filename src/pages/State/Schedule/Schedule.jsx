import { motion } from "framer-motion";

const Schedule = () => {
    return (
        <main className="w-full bg-[#0f4d70]">
        <div className="max-w-[1300px] w-full mx-auto px-5 py-5 flex flex-col items-start justify-between gap-2 text-white">
          <span className="text-lg font-medium uppercase tracking-tight pl-5">
            Upcoming Election Dates & Registration Deadlines
          </span>
          <span className="pl-5">
            Some elections in this list are local and do not apply for all
            Washington voters. Please click the “View all” button below to view
            all election dates in your state.
          </span>
          <div className="flex w-full justify-between gap-5">
            {/* left side */}
            <div className="w-full flex justify-between">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-full flex flex-col items-start gap-2 bg-[#0a3a5a] p-7 rounded-l-md z-[1]"
              >
                <span className="text-sm font-semibold bg-[#25506c] px-3 py-1">
                  NEXT ELECTION: PRIMARY
                </span>
                <span className="text-3xl font-bold text-balance">
                  Tuesday, March 12, 2024
                </span>
                <span>Presidential Primary</span>
                <span className="underline text-sm border-b-[5px] border-cyan-500 pb-3">
                  View details
                </span>
              </motion.div>
              <motion.div initial={{opacity:0,x:-70}} whileInView={{opacity:1,x:0}} transition={{duration:1,delay:1,stiffness:300,type:"spring"}} viewport={{once:true, amount:0.5}} className="w-full flex flex-col items-start justify-between p-7 border-t-4 border-r-4 border-b-4 border-[#3d7693] rounded-r-md gap-3">
                <span className="text-[#B7CBD5] font-bold">
                  Registration Deadlines
                </span>
                <div className="flex flex-col gap-1 w-full border-b pb-1 border-[#3d7693]">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-sm">ONLINE</span>
                    <span className="text-sm underline text-slate-200">
                      Get Registered!
                    </span>
                  </div>
                  <span className="text-lg">Monday, March 4, 2024</span>
                </div>
                <div className="w-full flex flex-col border-b pb-1 border-[#3d7693]">
                  <span className="text-sm font-bold">BY MAIL (RECEIVED)</span>
                  <span className="text-lg">Monday, March 4, 2024</span>
                </div>
                <div className="w-full flex flex-col">
                  <span className="text-sm font-bold">IN PERSON</span>
                  <span className="text-lg">Tuesday, March 12, 2024</span>
                </div>
              </motion.div>
            </div>

            {/* right side */}
            <div className="w-full flex flex-col items-start gap-5">
              <div className="w-full flex justify-between border-b border-[#3b6b87] pb-4">
                <div className="flex items-start gap-3">
                  <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1,type:"spring",stiffness:100,delay:1.2}} viewport={{once:true, amount:0.5}} className="flex flex-col items-center justify-center px-4 py-2 rounded-md bg-[#0a3a5a]">
                    <span className="text-2xl font-bold">06</span>
                    <span className="font-semibold text-cyan-500">AUG</span>
                  </motion.div>
                  <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1,type:"spring",stiffness:100, delay:1.3}} viewport={{once:true,amount:0.5}} className="flex flex-col items-start gap-2">
                    <span className="text-lg font-bold">
                      Tuesday, August 6, 2024
                    </span>
                    <span className="text-sm underline">View details</span>
                  </motion.div>
                </div>
                <motion.span initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1,type:"spring",stiffness:100, delay:1.4}} viewport={{once:true,amount:0.5}} className="font-bold text-slate-400 text-sm">
                  PRIMARY
                </motion.span>
              </div>
              <div className="w-full flex justify-between border-b border-[#3b6b87] pb-4">
                <div className="flex items-start gap-3">
                  <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1,type:"spring",stiffness:100,delay:1.2}} viewport={{once:true, amount:0.5}} className="flex flex-col items-center justify-center px-4 py-2 rounded-md bg-[#0a3a5a]">
                    <span className="text-2xl font-bold">05</span>
                    <span className="font-semibold text-cyan-500">AUG</span>
                  </motion.div>
                  <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1,type:"spring",stiffness:100, delay:1.3}} viewport={{once:true,amount:0.5}} className="flex flex-col items-start gap-2">
                    <span className="text-lg font-bold">
                      Tuesday, November 5, 2024
                    </span>
                    <span className="text-sm underline">View details</span>
                  </motion.div>
                </div>
                <motion.span initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1,type:"spring",stiffness:100, delay:1.4}} viewport={{once:true,amount:0.5}} className="font-bold text-slate-400 text-sm">
                  GENERAL
                </motion.span>
              </div>
              <div className="w-full flex justify-end">
                <motion.span initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1,type:"spring",stiffness:100, delay:1.4}} viewport={{once:true,amount:0.5}} className="text-sm underline">
                  View all election dates
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
};

export default Schedule;