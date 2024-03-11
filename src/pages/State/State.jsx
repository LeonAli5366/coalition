import { NavLink } from "react-router-dom";
import Schedule from "./Schedule/Schedule";
import Resources from "./Resources/Resources";
import VotingInfo from "./VotingInfo/VotingInfo";
const State = () => {
  return (
    <div className="w-full">
      <header className="w-full bg-gredient pt-32 pb-10">
        <div className=" max-w-[1300px] w-full mx-auto flex items-center pb-3 text-white justify-between border-b">
          <span>Voting In My State</span>
          <NavLink className={"text-blue-500 hover:text-white"}>
            View another state
          </NavLink>
        </div>
        <div className="max-w-[1300px] w-full mx-auto pt-5">
          <span className="text-7xl tracking-tight text-white uppercase">
            Washington
          </span>
        </div>
      </header>
      {/* main */}
      <Schedule />
      <Resources />
      <VotingInfo/>
    </div>
  );
};

export default State;
