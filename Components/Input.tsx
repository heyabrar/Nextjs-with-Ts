import zustandStore from "@/Zustand/store";
import React from "react";
import { shallowEqual } from "react-redux";

type Props = {};

const Input = () => {
  const [name, updateName] = zustandStore((state: any) => [
    state.name,
    state.updateName,
  ]);

  return (
    <section className="mt-10">
      <h1 className="text-center">Updating State</h1>
      <div className="w-[10%] m-auto mt-5 flex justify-center gap-2">
        <input
          placeholder="Add New User"
          onChange={(e) => updateName(e.currentTarget.value)}
          value={name}
        />
        <button onClick={() => updateName(name)}>ADD</button>
      </div>
      <h1>{name}</h1>
    </section>
  );
};

export default Input;
