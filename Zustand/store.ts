import { create } from "zustand";

const zustandStore = create((a) => ({
  count: 0,
  addCount: () => a((state: any) => ({ count: state.count + 1 })),
  redCount: () => a((state: any) => ({ count: state.count - 1 })),
}));

export default zustandStore;
