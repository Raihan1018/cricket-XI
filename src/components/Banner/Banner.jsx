import React from "react";

const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat my-16 flex justify-center items-center rounded-lg"
      style={{ backgroundImage: "url('/src/assets/bg-shadow.png')" }}
    >
      <div className="space-y-5">
        <img
          className="mx-auto"
          src="https://i.ibb.co.com/CK1LW97Y/banner-main.png"
          alt=""
        />
        <div className="text-center space-y-3">
          <h2 className=" text-2xl md:text-4xl font-semibold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className=" text-xl md:text-2xl">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn bg-[#E7FE29] text-black hover:underline hover:scale-105 transition-all duration-200 ease-in-out">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
