/* eslint-disable react/jsx-key */
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
const Plans = () => {
  return (
    <div className="bg-gredient w-full text-white sm:px-10 px-5 sm:py-24 py-10">
      <div className="max-w-[1300px] w-full flex flex-col items-center justify-center gap-28 mx-auto">
        {/* first */}
        <div className="w-full flex sm:flex-row flex-col bg-[#0a3a5a] rounded-md">
          <img
            src="https://static.wixstatic.com/media/02c388_733a2c237aa5460ea6c66bd0de75e3a9~mv2.jpg/v1/fill/w_324,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-andrea-piacquadio-3814571.jpg"
            alt=""
            className="w-[400px] p-5"
          />
          <div className="flex flex-col sm:items-start items-center justify-center gap-5">
            <h1 className="sm:text-3xl text-lg font-semibold sm:text-start text-center tracking-tight">
              Outdated Payment Models are the Problem
            </h1>
            <span className="font-medium text-balance sm:text-lg text-sm sm:text-start text-center sm:px-0 px-5 sm:pb-0 pb-3">
              Cost-based reimbursement is key to helping these essential rural
              providers remain open but unsustainably inflates prices to
              patients and payors. As a result, Rural Medicare beneficiaries pay
              coinsurance 2-6 times higher than all other Medicare beneficiaries
              for outpatient services.
            </span>
          </div>
        </div>
        {/* second */}
        <div className="w-full bg-[#0a3a5a] relative flex flex-col items-center justify-center sm:p-10 p-5 gap-5 rounded-md hover-outline transition-all duration-300">
          <div className="absolute -top-10 sm:size-[100px] size-[60px] rounded-lg text-white flex items-center justify-center glassEffect">
            <RiSecurePaymentFill className="sm:text-[60px] text-[30px]" />
          </div>
          <span className="sm:text-3xl text-lg tracking-tight font-semibold sm:pt-8">
            New Payment Method
          </span>
          <h1 className="font-medium text-center sm:text-lg text-sm">
            In order to create healthcare equality between rural and urban
            Medicare beneficiaries, we propose a new Critical Access Hospital
            and Rural Health Clinic payment system using a hybrid of
            fee-for-service and cost-based reimbursement. Hospitals and clinics
            would bill under the OPPS for outpatient services, the IPPS for
            inpatient services, and the SNF payment system for swing beds, while
            continuing to file a cost report as they do today for unreimbursed
            costs. They would receive monthly payments of estimated costs, minus
            paid claims, under the same rules of CBR used today. This simple
            change would lower prices to the same levels paid by all other
            beneficiaries, subsequently reducing coinsurance to equal rates and
            finally enabling all rural providers to participate fully in quality
            programs and value-based care initiatives.{" "}
          </h1>
        </div>
        <div className="w-full bg-[#0a3a5a] relative flex flex-col items-center justify-center sm:p-10 p-5 gap-5 rounded-md hover-outline transition-all duration-300">
          <div className="absolute -top-10 sm:size-[100px] size-[60px] rounded-lg text-green-300 flex items-center justify-center glassEffect">
            <MdHealthAndSafety className="sm:text-[60px] text-[30px]" />
          </div>
          <h1 className="sm:text-3xl text-lg tracking-tight sm:text-start text-center font-semibold sm:pt-8 text-green-300 pt-2">
            Increasing Quality For Beneficiaries
          </h1>
          <h1 className="font-medium text-center sm:text-lg text-sm text-green-300">
            Current cost-based reimbursement is not tied to value and
            participation in quality programs is not rewarded. The Rural Health
            Clinic &quot;All Inclusive Rate&quot; pays providers the same amount
            per visit regardless of the care provided, with no tie to quality
            and value, and doesn&apos;t pay for preventative care if added to
            the visit. Providers have been excluded from earning more for
            quality, including Medicare Meaningful Use and MACRA, leaving rural
            patients to die younger and suffer more from chronic disease. Since
            physicians aren&apos;t either paid or incentivized to promote
            preventive care, beneficiaries in rural areas are less likely to
            receive these life-saving services. The proposed new payment system
            would compensate and incentivize providers to participate in
            inpatient and outpatient quality programs and greatly reduce rural
            disparities.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Plans;
