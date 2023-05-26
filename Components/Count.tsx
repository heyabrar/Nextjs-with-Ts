import zustandStore from "@/Zustand/store";
import React, { useMemo } from "react";

const Count = () => {
  const count = zustandStore((state: any) => state?.count);
  const addCount = zustandStore((state: any) => state.addCount);
  const redCount = zustandStore((state: any) => state.redCount);

  const disable = useMemo(() => {
    return count === 0;
  }, [count]);

  return (
    <section className="mt-6">
      <h1 className="text-center">Counter</h1>
      <div className="w-[20%] m-auto flex justify-center gap-4 mt-2">
        {count}
        <button onClick={addCount} type="button">
          ADD
        </button>
        <button onClick={redCount} type="button" disabled={disable}>
          Reduce
        </button>
      </div>
    </section>
  );
};

export default Count;
