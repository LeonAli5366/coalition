/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const GetInfoProposal = () => {
  const [select, setSelect] = useState("Inpatient");
  return (
    <div className="bg-gredient py-[130px]">
      <div className="text-5xl font-semibold text-center ">
        Proposal Specifics
      </div>
      {/* buttons */}
      <div className="grid grid-cols-4 gap-5 mx-20 mt-20 text-[18px]">
        <button
          onClick={() => {
            setSelect("Inpatient");
          }}
          className={`text-[white]  py-4   rounded-[14px]  hover:text-[Provider] hover:bg-[#CCECEE] ${
            select === "Inpatient" ? "text-[#14967F] bg-[#CCECEE]" : "border"
          }`}
        >
          Inpatient Services
        </button>
        <button
          onClick={() => {
            setSelect("Outpatient");
          }}
          className={`text-[white]  py-4   rounded-[14px]  hover:text-[#14967F] hover:bg-[#CCECEE] ${
            select === "Outpatient" ? "text-[#14967F] bg-[#CCECEE]" : "border"
          }`}
        >
          Outpatient Services
        </button>
        <button
          onClick={() => {
            setSelect("Swing");
          }}
          className={`text-[white]  py-4   rounded-[14px]  hover:text-[#14967F] hover:bg-[#CCECEE] ${
            select === "Swing" ? "text-[#14967F] bg-[#CCECEE]" : "border"
          }`}
        >
          Swing Beds
        </button>
        <button
          onClick={() => {
            setSelect("Provider");
          }}
          className={`text-[white]  py-4   rounded-[14px]  hover:text-[#14967F] hover:bg-[#CCECEE] ${
            select === "Provider" ? "text-[#14967F] bg-[#CCECEE]" : "border"
          }`}
        >
          Provider-Based Rural Health Clinics
        </button>
      </div>
      {/* data section */}
      <section>
        {/* children */}
        <div
          className={`border mx-20 mt-10 bg-[#CCECEE] text-[#14967F] rounded-[10px] py-16 text-[20px] ${
            select === "Inpatient" ? " " : "hidden"
          }`}
        >
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              CAH bills services under the{" "}
              <span className="font-semibold">
                Inpatient Prospective Payment System
              </span>{" "}
              and is reimbursed by the MAC or MA plan.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              CAH files{" "}
              <span className="font-semibold">annual cost report</span> with the
              MAC with periodic updates as needed.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              <span className="font-semibold">
                MAC calculates and pays the Rural Access Payment
              </span>{" "}
              on a monthly basis based on unreimbursed costs on behalf of both
              Medicare FFS and MA beneficiaries.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              IPPS and RAP payments will be charged to the IPPS.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              CAH reports appropriate{" "}
              <span className="font-semibold">inpatient quality metrics</span>{" "}
              (MBQIP) to CMS
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              <span className="font-semibold">
                Total reimbursement would not change.
              </span>
            </h1>
          </div>
        </div>
        {/* children */}
        <div
          className={`border mx-20 mt-10 bg-[#CCECEE] text-[#14967F] rounded-[10px] py-16 text-[20px] ${
            select === "Outpatient" ? " " : "hidden"
          }`}
        >
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              CAH bills services under the{" "}
              <span className="font-semibold">
                Outpatient Prospective Payment System
              </span>{" "}
              and is reimbursed by the MAC or MA plan.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              CAH files{" "}
              <span className="font-semibold">annual cost report</span> with the
              MAC with periodic updates as needed.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              <span className="font-semibold">
                AC calculates and pays the Rural Access Payment
              </span>{" "}
              on a monthly basis based on unreimbursed costs on behalf of both
              Medicare FFS and MA beneficiaries.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              CAH reports{" "}
              <span className="font-semibold">outpatient quality metrics</span>{" "}
              (MACRA) to CMS if required or on a paid voluntary basis.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              <span className="font-semibold">
                Total reimbursement would not change.
              </span>{" "}
            </h1>
          </div>
        </div>
        {/* children */}
        <div
          className={`border mx-20 mt-10 bg-[#CCECEE] text-[#14967F] rounded-[10px] py-16 text-[20px] ${
            select === "Swing" ? " " : "hidden"
          }`}
        >
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              CAH bills services under the{" "}
              <span className="font-semibold">
                Skilled Nursing Facility Prospective Payment System
              </span>{" "}
              and is reimbursed by the MAC or MA plan.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              CAH files{" "}
              <span className="font-semibold">annual cost report</span> with the
              MAC with periodic updates as needed.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              <span className="font-semibold">
                AC calculates and pays the Rural Access Payment
              </span>{" "}
              on a monthly basis based on unreimbursed costs on behalf of both
              Medicare FFS and MA beneficiaries.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              CAH reports{" "}
              <span className="font-semibold">required SNF quality data</span>{" "}
              to CMS.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              <span className="font-semibold">
                Total reimbursement would not change.
              </span>{" "}
            </h1>
          </div>
        </div>
        {/* children */}
        <div
          className={`border mx-20 mt-10 bg-[#CCECEE] text-[#14967F] rounded-[10px] py-16 text-[20px] ${
            select === "Provider" ? " " : "hidden"
          }`}
        >
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              RHC{" "}
              <span className="font-semibold">
                bills services under the Physician Fee Schedule
              </span>{" "}
              and is reimbursed by the MAC or MA plan.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              RHC files{" "}
              <span className="font-semibold">annual cost report</span> with the
              MAC with periodic updates as needed.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              <span className="font-semibold">
                MAC calculates and pays the Rural Access Payment
              </span>{" "}
              on a monthly basis on behalf of both Medicare FFS and MA
              beneficiaries.
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              RHC reports{" "}
              <span className="font-semibold">outpatient quality metrics</span>{" "}
              (MACRA) to CMS if required or on a paid voluntary basis.
            </h1>{" "}
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              <span className="font-semibold">
                Current RHC caps would apply to the RAP payment.
              </span>{" "}
            </h1>
          </div>
          <div className="flex items-center pl-16">
            <span className="text-5xl font-bold">.</span>
            <h1 className="mt-6 ml-3">
              <span className="font-semibold">
                Total reimbursement would not change.
              </span>{" "}
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInfoProposal;
