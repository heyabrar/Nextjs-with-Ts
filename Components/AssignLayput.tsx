import React from "react";
import DummyImage from "./Assets/Images/dummyImage";

type Props = {};

const AssignLayput = () => {
  return (
    <section>
      <div className="border-2 grid px-8 py-10 shadow-lg md:grid-cols-2">
        <div className="border p-4 relative">
          <h1>Question Paper</h1>
          <p>To submit your answer please view your question paper here</p>
          <div className="flex gap-2 absolute bottom-0">
            <button className="border px-2 py-2 rounded-md w-[100px]">
              Download
            </button>
            <button className="border px-2 py-2 rounded-md w-[100px]">
              View
            </button>
          </div>
        </div>
        <div className="border flex order-first justify-center md:!justify-end md:order-last">
          <DummyImage />
        </div>
      </div>
    </section>
  );
};

export default AssignLayput;
