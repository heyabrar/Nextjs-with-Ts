import zustandStore from "@/Zustand/store";
import React from "react";

const Count = () => {
  const count = zustandStore((state: any) => state?.count);
  const addCount = zustandStore((state: any) => state.addCount);
  const redCount = zustandStore((state: any) => state.redCount);
  return (
    <div>
      {count}
      <button onClick={addCount}>ADD</button>
      <button onClick={redCount}>Reduce</button>
    </div>
  );
};

export default Count;
