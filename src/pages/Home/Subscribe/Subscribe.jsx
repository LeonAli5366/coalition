const Subscribe = () => {
  return (
    <div className="bg-[url('https://static.wixstatic.com/media/02c388_614548db007846e5a778740ab3a17ca5~mv2.png/v1/fill/w_1728,h_364,al_c,q_90,enc_auto/02c388_614548db007846e5a778740ab3a17ca5~mv2.png')] w-full h-[400px] bg-cover flex flex-col items-center justify-center text-white gap-7">
      <span className="text-5xl font-semibold">Join The Coalition</span>
      <div className="w-[800px] mx-auto flex items-center">
        <input type="text" name="" id="" className="glassEffect w-full py-4 pl-2"/>
        <button className="glass px-8 py-4 uppercase font-medium hover:text-black transition-all duration-300">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
