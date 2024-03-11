import { FaFacebookF, FaLink, FaTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const VotingInfo = () => {
  return (
    <div className="w-full bg-gredient text-white pb-5">
      <div className="max-w-[1300px] w-full mx-auto flex bg-[#0a3a5a] rounded-md">
        <div className="w-[30%] flex flex-col bg-transparent rounded-l-md">
          <span className="text-3xl font-semibold tracking-tight p-5">
            WASHINGTON VOTING INFORMATION
          </span>
          <div className="w-full flex flex-col items-start">
            <NavLink className="pl-5 py-2 bg-transparent w-full buttonEffect">
              Absentee Ballot Process
            </NavLink>
            <NavLink className="pl-5 py-2 bg-transparent w-full buttonEffect">
              Campaign Finance Information
            </NavLink>
            <NavLink className="pl-5 py-2 bg-transparent w-full buttonEffect">
              Candidate and Ballot Measure Information
            </NavLink>
          </div>
        </div>
        {/* right side */}
        <div className="w-[70%] bg-transparent p-10 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">Absentee Ballot Process</span>
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium">Spread the word</span>
              <div className="glass size-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="glass size-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaTwitter />
              </div>
              <div className="glass size-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaLink />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start text-pretty gap-3">
            <span className="font-medium">
              Washington state is a vote by mail state, so all registered voters
              receive a ballot by mail. Absentee ballots only need to be
              requested if you will not be at your registered address during the
              18 days before an election. If you are away from your registered
              address before an election, you can contact your county election
              official to see if they are able to forward your mail ballot to
              your new, temporary address. Your ballot is mailed to you at least
              18 days before each election. Voted ballots must be postmarked or
              received by Election Day in order to be counted. You can sign up
              to track your mail ballot on your Secretary of State website.
              Absentee ballots begin being counted on Election Day. If you have
              any questions contact your Secretary of State.
            </span>
            <span>
              You may request an absentee ballot as early as 90 days before an
              election. No absentee ballots are issued on election day except to
              a voter who is a resident of a health care facility. The request
              for an absentee ballot must be made to your county auditor or
              elections department. You can also fill out an absentee ballot
              request for here.
            </span>
            <span>
              NOTE: Absentee ballots must be signed and postmarked or delivered
              to the county election officer on or before election day.
            </span>
            <span>
              Overseas citizens and U.S. military personnel can find information
              on how to register to vote and request an absentee ballot at the
              Overseas Vote Foundation.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingInfo;
