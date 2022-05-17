import create from "zustand";

export interface RootSlice {
  bears: number;
  increasePopulation: () => Promise<void>;
  removeAllBears: () => void;
  rehydrate: (state: { bears: number }) => void;
}

export const useStore = create<RootSlice>((set) => ({
  bears: 0,
  increasePopulation: async () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 1000);
    });
    await promise;
    return set((state) => ({ bears: state.bears + 1 }));
  },
  removeAllBears: () => set({ bears: 0 }),
  rehydrate: (state: { bears: number }) => {
    set({ ...state, rehydrate: () => {} });
  },
}));
