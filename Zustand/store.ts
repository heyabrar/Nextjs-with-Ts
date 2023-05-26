import { create } from "zustand";

type State = {
  name: string;
};

type Action = {
  updateName: (name: State["name"]) => void;
};

const zustandStore = create<State & Action>((set) => ({
  name: "",
  updateName: (name) => set(() => ({ name: name })),
}));

export default zustandStore;
