import { motion } from "framer-motion";
const leaders = [
  {
    img: "https://static.wixstatic.com/media/02c388_00aa59f15ee347f494869bb0539bb48e~mv2.png/v1/fill/w_123,h_123,al_c,lg_1,q_85,enc_auto/Lynn%20Barr.png",
    name: "Lynn Barr",
    role: "MPH, Barr-Campbell Family Foundation",
    delay:0
  },
  {
    img: "https://static.wixstatic.com/media/02c388_e624f42d61314240897cdf1a9905a6f3~mv2.png/v1/crop/x_1,y_0,w_121,h_121/fill/w_123,h_123,al_c,lg_1,q_85,enc_auto/Carrie%20Cochran-Fisher.png",
    name: "Carrie Cochran Fisher",
    role: "MPH, National Rural Health Association",
    delay:0.3
  },
  {
    img: "https://static.wixstatic.com/media/02c388_37589d6da2df441ead13cd59cd2704ce~mv2.png/v1/crop/x_1,y_0,w_121,h_121/fill/w_123,h_123,al_c,lg_1,q_85,enc_auto/Alexa.png",
    name: "Alexa Mckinley",
    role: "MPH, National Rural Health Association",
    delay:0.5
  },
  {
    img: "https://static.wixstatic.com/media/02c388_bcf03808c98e45b4a98727e0761e4958~mv2.png/v1/crop/x_1,y_0,w_121,h_121/fill/w_123,h_123,al_c,lg_1,q_85,enc_auto/Eric%20Shell.png",
    name: "Eric Shell",
    role: "CPA, Stroudwater Associates",
    delay:0.7
  },
  {
    img: "https://static.wixstatic.com/media/02c388_f1d85f7d87bd40fba5ef8ded9c68e88e~mv2.png/v1/crop/x_1,y_0,w_121,h_121/fill/w_123,h_123,al_c,lg_1,q_85,enc_auto/TommyBarnhart_1.png",
    name: "Tommy Barnhart",
    role: "CPA, Ten Mile Enterprises",
    delay:0.9
  },
  {
    img: "https://static.wixstatic.com/media/02c388_19f64dc40f5747ae8c79531bd6759581~mv2.png/v1/crop/x_1,y_0,w_121,h_121/fill/w_123,h_123,al_c,lg_1,q_85,enc_auto/Tim-Putnam.png",
    name: "Tim Putnam",
    role: "DHA, Career CAH CEO",
    delay:1.1
  },
  {
    img: "https://static.wixstatic.com/media/02c388_31accd1b69a444c2b5810aa43a5a7fdf~mv2.png/v1/crop/x_1,y_0,w_121,h_121/fill/w_123,h_123,al_c,lg_1,q_85,enc_auto/Jennifer%20Bell.png",
    name: "Jennifer Bell",
    role: "MS, Chamber HIll Strategies",
    delay:1.3
  },
];

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-[#0a3a5a] px-5 py-10 text-white">
        <div className="max-w-[1300px] w-full mx-auto flex flex-col items-center justify-center gap-5 py-5">
          <span className="text-7xl font-semibold">Mission</span>
          <h1 className="text-xl font-medium text-center text-balance leading-8">
            To Achieve the Same Cost, Access and Quality Of Healthcare for rural
            beneficiaries that is Afforded to all other classes of Medicare
          </h1>
        </div>
      </div>
      <div className="w-full bg-gredient px-5 text-white">
        <div className="max-w-[1300px] w-full mx-auto flex flex-col items-center justify-center gap-5 py-10">
          <span className="text-5xl font-semibold">Leadership</span>
          <span className="text-xl font-medium">
            Relationships and experience that drive results
          </span>
          <div className="w-full grid grid-cols-3 gap-10 py-10">
            {leaders.map((data, i) => (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                  delay:`${data.delay}`
                }}
                key={i}
                className="flex items-center gap-5 rounded-l-full rounded-r-full bg-[#0a3a5a] p-2"
              >
                <img src={data.img} alt="" className="rounded-full" />
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-medium">{data.name}</span>
                  <h1 className="text-balance">{data.role}</h1>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
