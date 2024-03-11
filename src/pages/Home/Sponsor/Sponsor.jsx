const Sponsor = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 pt-10">
      <span className="text-5xl font-semibold uppercase tracking-tight">Sponsor or Partner With Us</span>
      <button className="glass px-7 py-3 rounded-full font-medium">
        View all sponsors
      </button>
      <div className="flex items-center justify-evenly w-full">
        <img
          src="http://vote411-prod.s3.amazonaws.com/s3fs-public/2020-10/shipt%20logo%20horiz%20Green%20and%20Plum%20RGB%20%28002%29%20resized.png"
          alt=""
          className="w-[200px]"
        />
        <img
          src="http://vote411-prod.s3.amazonaws.com/s3fs-public/2020-10/target%20resized.jpg"
          alt=""
          className="w-[100px]"
        />
        <img
          src="http://vote411-prod.s3.amazonaws.com/s3fs-public/2024-01/inc_1.jpeg"
          alt=""
          className="w-[200px]"
        />
        <img
          src="http://vote411-prod.s3.amazonaws.com/s3fs-public/2020-10/afa%20resized.png"
          alt=""
          className="w-[100px]"
        />
      </div>
    </div>
  );
};

export default Sponsor;
