import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import {motion} from 'framer-motion'
const Social = () => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true, amount:0.5}} transition={{duration:0.5}} className="bg-[url('http://vote411-prod.s3.amazonaws.com/s3fs-public/2019-08/VOTE411-PhotoGrid.jpg')] w-full h-[600px] bg-cover bg-top relative">
      <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:0.5}} transition={{duration:0.5}} className="w-[600px] h-[500px] bg-white absolute top-[30px] left-[325px] p-10">
        <div className="w-full h-full ring-8 ring-green-600 flex flex-col justify-between p-10">
          <span className="text-4xl uppercase font-semibold rift">
            Help us reach more voters by sharing on social.
          </span>
          <div className="flex gap-5">
            <button className="size-14 bg-blue-800 rounded-full flex items-center justify-center ring-gredient">
              <FaFacebookF color="white" size={24} />
            </button>
            <button className="size-14 bg-blue-500 rounded-full flex items-center justify-center ring-gredient">
              <FaTwitter color="white" size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Social;
