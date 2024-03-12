import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <div className="w-full bg-[#0a3a5a]">
        <div className="max-w-[1300px] flex sm:flex-row flex-col mx-auto w-full h-full px-5 py-5">
          <div className="w-full flex flex-col items-start sm:gap-5 gap-2 sm:border-r border-r-0 border-b sm:border-b-0 sm:pb-0 pb-3 border-slate-600 ">
            <span className="sm:text-3xl text-lg uppercase font-semibold tracking-tight text-[#fec40e]">
              Join The Coalition
            </span>
            <span className="text-white sm:text-lg text-sm">
              Join our Coalition by enter your email
            </span>
            <div className="w-full flex items-center">
              <button className="glass sm:px-7 px-5 py-2 sm:py-3 text-white font-medium hover:text-black transition-all duration-300 rounded-l-full">
                Subscribe
              </button>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email"
                className="sm:w-[350px] placeholder:italic pl-2 text-white outline-none sm:py-3 py-2 glassEffect rounded-r-full"
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-start sm:pl-8 sm:gap-5 gap-2 sm:pt-0 pt-2">
            <span className="sm:text-3xl text-lg uppercase font-semibold tracking-tight text-[#fec40e]">
              Explore Our Blog
            </span>
            <span className="text-white sm:text-lg text-sm">
              Find out what our work
            </span>
            <button className="glass px-7 sm:py-3 py-2 rounded-full text-white font-medium hover:text-black transition-all duration-300">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-gredient text-white">
        <div className="flex flex-col max-w-[1300px] mx-auto w-full py-5 px-5">
          {/* main footer */}
          <div className="w-full flex sm:flex-row flex-col">
            {/* left side */}
            <div className="w-full flex flex-col items-start gap-3 pb-5">
              <img
                src="https://www.vote411.org/themes/basic/images/source/Vote411-logo_web_darkbg.svg"
                alt=""
                className="w-[150px]"
              />
              <span className="text-xs text-balance">
                VOTE411 is committed to ensuring voters have the information
                they need to successfully participate in every election. Whether
                it&apos;s local, state or federal, every election is important
                to ensuring our laws and policies reflect the values and beliefs
                of our communities.
              </span>
              <div className="flex items-center gap-2">
                <img
                  src="https://i.postimg.cc/y6MJghwr/logo411-png-removebg-preview.png"
                  alt=""
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">
                    2020 People&apos;s Voice Winner
                  </span>
                  <span className="text-xs font-extralight">Wobby Award</span>
                </div>
              </div>
            </div>

            {/* right side footer */}
            <div className="w-full flex items-start sm:gap-10 gap-2 sm:pb-0 pb-3">
              <div className="sm:w-auto w-full flex flex-col items-start sm:text-sm text-xs font-medium gap-2">
                <span>Contact Us</span>
                <span>About Us</span>
                <span>Get Involved</span>
                <span>Sponsors & Partners</span>
              </div>
              <div className="sm:w-auto w-full flex flex-col items-start sm:text-sm text-xs font-medium gap-2">
                <span className="text-slate-400 font-normal">Follow us</span>
                <div className="flex items-center gap-2">
                  <div className="size-4 bg-white rounded flex items-center justify-end">
                    <FaFacebookF color="black" />
                  </div>
                  <span>Facebook</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 bg-white rounded flex items-center justify-center">
                    <FaInstagram color="black" />
                  </div>
                  <span>Instagram</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 bg-white rounded flex items-center justify-center">
                    <FaTwitter color="black" />
                  </div>
                  <span>Twitter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 bg-white rounded flex items-center justify-center">
                    <FaYoutube color="black" />
                  </div>
                  <span>YouTube</span>
                </div>
              </div>
              <div className="sm:w-auto w-full flex flex-col items-start gap-2">
                <span className="text-slate-400 sm:text-sm text-xs">
                  Brought to you by
                </span>
                <img
                  src="https://www.vote411.org/themes/basic/images/source/LWV-logo-knockout.svg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* all right reserved */}
          <div className="flex sm:flex-row flex-col items-center justify-between border-t border-slate-600 sm:py-5 sm:gap-0 gap-2 sm:pt-0 pt-2">
            <h1 className="text-xs sm:text-start text-center">
              ©2024 League of Women Voters Education Fund. All rights reserved.
            </h1>
            <div className="flex gap-10">
              <button className="text-xs hover:underline">Terms of Use</button>
              <button className="text-xs hover:underline">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
