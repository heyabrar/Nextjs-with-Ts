import React from "react";
import DummyImage from "./Assets/Images/dummyImage";

type Props = {};

const AssignLayput = () => {
  return (
    <section>
      <div className="w-[90%] m-auto grid px-8 py-10 md:shadow-md rounded-md mt-4 md:grid-cols-2">
        <div className="p-4 relative text-center md:text-left">
          <h1 className="text-[20px] font-simebold">Question Paper</h1>
          <p className="text-gray-400 text-[14px]">
            To submit your answer please view your question paper here
          </p>
          <div className="flex gap-2 justify-center mt-4 relative md:absolute bottom-0 md:justify-start">
            <button className="border px-2 py-2 rounded-md w-[100px] border-orange-500 bg-orange-500 text-white">
              Download
            </button>
            <button className="border px-2 py-2 rounded-md w-[100px] border-orange-500">
              View
            </button>
          </div>
        </div>

        <div className="flex order-first justify-center md:!justify-end md:order-last">
          <DummyImage />
        </div>
      </div>
    </section>
  );
};

export default AssignLayput;
