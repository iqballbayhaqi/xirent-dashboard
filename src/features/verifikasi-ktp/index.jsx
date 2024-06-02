import React from "react";

const VerifikasiKtp = () => {
  return (
    <div className="w-full bg-base-100 p-4 rounded-lg shadow-lg">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 justify-center">
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
          className="w-[500px] h-[330px]  md:w-400 md:h-300 xl:w-400 xl:h-300 "
        />

        <div className="flex justify-center items-center gap-5">
          <button className="bg-sky-700 text-white font-semibold px-10 py-2 rounded">
            Terima
          </button>
          <button className="bg-red-500 text-white font-semibold  px-10 py-2 rounded">
            Tolak
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifikasiKtp;
