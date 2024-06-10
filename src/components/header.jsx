import React from "react";

function header() {
  return (
    <div className="flex items-center justify-center font-poppins pt-[10rem]">
      <div className="flex-col items-center justify-center text-gray-900 w-[30rem] h-[8rem">
        <h1 className="text-center text-[2rem] font-bold">
          Currency Converter
        </h1>
        <p className="text-center text-[1rem] text-gray-600 pt-[0.8rem]">
          Stay updated with real-time exchange rates and quickly convert any
          currency.
        </p>
      </div>
    </div>
  );
}

export default header;
