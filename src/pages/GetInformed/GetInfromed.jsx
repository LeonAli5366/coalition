/* eslint-disable no-unused-vars */
import React from "react";
import GetInfoSolution from "./GetInfoSolution/GetInfoSolution";
import GetInfoSupporting from "./GetInfoSupporting/GetInfoSupporting";
import GetInfoProposal from "./GetInfoProposal/GetInfoProposal";

const GetInfromed = () => {
  return (
    <div className="bg-gredient text-white">
      <GetInfoSolution></GetInfoSolution>
      <GetInfoSupporting></GetInfoSupporting>
      <GetInfoProposal></GetInfoProposal>
    </div>
  );
};

export default GetInfromed;
