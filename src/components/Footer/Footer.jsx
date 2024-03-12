import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <div className="w-full bg-[#0a3a5a]">
        <div className="max-w-[1300px] flex mx-auto w-full h-full px-5 py-5">
          <div className="w-full flex flex-col items-start gap-5 border-r border-slate-600">
            <span className="text-3xl uppercase font-semibold tracking-tight text-[#fec40e]">
            Join The Coalition
            </span>
            <span className="text-white text-lg">
              Join our Coalition by enter your email
            </span>
            <div className="w-full">
            <button className="glass px-7 py-3 rounded-full text-white font-medium">
              Make a donation
            </button>
            <input type="text" name="" id="" className="" />
            </div>
          </div>

          <div className="w-full flex flex-col items-start pl-8 gap-5">
            <span className="text-3xl uppercase font-semibold tracking-tight text-[#fec40e]">
              Your Voting Guide
            </span>
            <span className="text-white text-lg">
              Find what&apos;s on your ballot
            </span>
            <button className="glass px-7 py-3 rounded-full text-white font-medium">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-gredient text-white">
        <div className="flex flex-col max-w-[1300px] mx-auto w-full py-5 px-5">
          {/* main footer */}
          <div className="w-full flex">
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
                <img src="https://i.postimg.cc/y6MJghwr/logo411-png-removebg-preview.png" alt="" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">
                  2020 People&apos;s Voice Winner
                </span>
                <span className="text-xs font-extralight">Wobby Award</span>
              </div>
              </div>
            </div>

            {/* right side footer */}
            <div className="w-full flex items-start gap-10">
              <div className="flex flex-col items-start text-sm font-medium gap-2">
                <span>Contact Us</span>
                <span>About Us</span>
                <span>Get Involved</span>
                <span>Sponsors & Partners</span>
              </div>
              <div className="flex flex-col items-start text-sm font-medium gap-2">
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
              <div className="flex flex-col items-start gap-2">
                <span className="text-slate-400 text-sm">Brought to you by</span>
                <img
                  src="https://www.vote411.org/themes/basic/images/source/LWV-logo-knockout.svg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* all right reserved */}
          <div className="flex items-center justify-between border-t border-slate-600 py-5">
            <span className="text-xs">
              ©2024 League of Women Voters Education Fund. All rights reserved.
            </span>
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
