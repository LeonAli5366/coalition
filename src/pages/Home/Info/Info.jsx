/* eslint-disable react/jsx-key */
import LineCharts from "../../../components/Charts/LineCharts";
import PieCharts from "../../../components/Charts/PieCharts";

const Info = () => {
  return (
    <div className="bg-gredient w-full text-white py-10">
      <div className="max-w-[1300px] w-full mx-auto px-5 items-center justify-center py-10">
        <h1 className="text-5xl font-semibold text-center pb-14">
          Rural Patients Pay More Than Twice as Much for Medicare And Get Far
          Worse Outcomes
        </h1>
        <div className="w-full flex items-center justify-between gap-10">
          <div className="bg-[#0a3a5a] w-full h-[400px] rounded-md pt-10">
            <h1 className="text-center">
              Average Beneficiary Coinsurance - % of hospital payments
            </h1>
            <PieCharts />
          </div>
          <div className="w-full flex flex-col bg-[#0a3a5a] h-[400px] rounded-md">
           <LineCharts/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
