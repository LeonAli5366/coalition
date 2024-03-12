/* eslint-disable no-unused-vars */
import React from "react";

const GetInfoSupporting = () => {
  return (
    <div className="bg-[#E2FCD6] text-[#095D7E] py-[130px]">
      <div className="text-5xl font-semibold text-center">
        Supporting Rural Providers Will
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10 mx-10">
        {/* childeren */}
        <div className="p-10 bg-white rounded-[10px]">
          <h1 className="text-2xl font-semibold text-[#64BAAB]">
            Reduce Co-insurance
          </h1>
          <p className="ml-3 mt-3 font-[600]">
            Reduces co-insurance for rural beneficiaries to the same rate paid
            by all other beneficiaries.
          </p>
        </div>
        {/* childeren */}
        <div className="p-10 bg-white rounded-[10px]">
          <h1 className="text-2xl font-semibold text-[#64BAAB]">
            Create Financial Stability
          </h1>
          <p className="ml-3 mt-3 font-[600]">
            Provides financial stability for CAHs and RHCs regardless of MA
            penetration and reduction of avoidable admissions.
          </p>
        </div>
        {/* childeren */}
        <div className="p-10 bg-white rounded-[10px]">
          <h1 className="text-2xl font-semibold text-[#64BAAB]">
            Improve Hospital Quality
          </h1>
          <p className="ml-3 mt-3 font-[600]">
            Allows CAHs to thrive in value-based programs and encourages
            participation.
          </p>
        </div>
        {/* childeren */}
        <div className="p-10 bg-white rounded-[10px]">
          <h1 className="text-2xl font-semibold text-[#64BAAB]">
            Disincentivize Rural Bypass
          </h1>
          <p className="ml-3 mt-3 font-[600]">
            Removes incentives for ACOs and MA plans to steer patients to lower
            cost settings that undermine the viability of rural providers and
            threaten local access to care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInfoSupporting;
