/* eslint-disable no-unused-vars */
import React from "react";

const GetInfoSolution = () => {
  return (
    <div className="py-[130px]">
      <div className="text-center">
        <h1 className="text-5xl font-semibold">SOLUTION</h1>
        <h2 className="pt-8 text-3xl">
          Establish a New Voluntary Payment Option for CAHs and their RHCs
        </h2>
        {/* parent div */}
        <div className="px-10 mt-16 ">
          {/* children */}
          <div className="grid grid-cols-2 gap-5 ">
            <div className="mt-5 ">
              <div className="bg-[#095D7E] rounded-[20px] h-[300px] relative">
                {/* div badge */}

                <div className="pt-4">
                  <div className="border w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#095D7E] bg-white font-bold text-2xl ml-7">
                    1
                  </div>
                </div>
                {/* div info */}
                <div className="mx-5 tracking-wider text-start mt-8">
                  <p>
                    CAHs and RHCs would bill for services under the appropriate
                    Prospective Payment System (PPS) and receive a monthly Rural
                    Access Payment (RAP) to cover unreimbursed costs in excess
                    of the PPS payment. RHCs would still be subject to the new
                    payment limits for the RAP.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full">
              <div className="bg-[#14967F] rounded-[20px] h-[300px] relative">
                {/* div badge */}

                <div className="pt-5">
                  <div className="border w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#095D7E] bg-white font-bold text-2xl ml-7">
                    2
                  </div>
                </div>
                {/* div info */}
                <div className="mx-5 tracking-wider text-start mt-8">
                  <div>
                    <span>
                      The RAP is calculated by the amount of the current
                      cost-based reimbursement amount less the PPS payment and
                      co-insurance.{" "}
                    </span>
                    <div className="mx-auto  p-6 pt-3">
                      RAP = Allowable costs – (PPS payment + PPS coinsurance).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* children */}
          <div className="grid grid-cols-3 gap-5 ">
            <div className="mt-5">
              <div className="bg-[#095D7E] rounded-[20px] h-[250px] relative">
                {/* div badge */}

                <div className="pt-4">
                  <div className="border w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#095D7E] bg-white font-bold text-2xl ml-7">
                    4
                  </div>
                </div>
                {/* div info */}
                <div className="mx-5 tracking-wider text-start mt-8">
                  <p>
                    The total payment would be the same as current cost-based
                    reimbursement.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full">
              <div className="bg-[#14967F] rounded-[20px] h-[250px] relative">
                {/* div badge */}

                <div className="pt-5">
                  <div className="border w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#095D7E] bg-white font-bold text-2xl ml-7">
                    5
                  </div>
                </div>
                {/* div info */}
                <div className="mx-5 tracking-wider text-start mt-8">
                  <p>
                    RHCs would still be subject to the new payment limits but
                    can earn new bonuses under MACRA.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full">
              <div className="bg-[#095D7E] rounded-[20px] h-[250px] relative">
                {/* div badge */}

                <div className="pt-5">
                  <div className="border w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#095D7E] bg-white font-bold text-2xl ml-7">
                    6
                  </div>
                </div>
                {/* div info */}
                <div className="mx-5 tracking-wider text-start mt-8">
                  <p>
                    CAHs and clinicians would report quality metrics as
                    appropriate for their volume and scope of practice and get
                    paid for their performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* children */}
          <div className="grid grid-cols-2 gap-5 ">
            <div className="mt-5">
              <div className="bg-[#095D7E] rounded-[20px] h-[300px] relative">
                {/* div badge */}

                <div className="pt-4">
                  <div className="border w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#095D7E] bg-white font-bold text-2xl ml-7">
                    7
                  </div>
                </div>
                {/* div info */}
                <div className="mx-5 tracking-wider text-start mt-8">
                  <p>
                    Cost reports would continue to be filed with the Medicare
                    Administrative Contractor which would make RAP payments for
                    both Medicare fee-for-service (FFS) and MA beneficiaries.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full">
              <div className="bg-[#14967F] rounded-[20px] h-[300px] relative">
                {/* div badge */}

                <div className="pt-5">
                  <div className="border w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#095D7E] bg-white font-bold text-2xl ml-7">
                    8
                  </div>
                </div>
                {/* div info */}
                <div className="mx-5 tracking-wider text-start mt-8">
                  <p>
                    MA plans would only be charged the fee-schedule (or
                    negotiated) rates and would not be responsible for the RAP
                    payment. RAP payments would not be counted in the MA
                    benchmark and would be paid directly to the provider, like
                    Rural Emergency Hospital payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInfoSolution;
