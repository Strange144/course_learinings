import { create } from "zustand"
export const CountStore = create((set) => (
    {
        Count: 0,
        increaseCount: () => set((state) => ({ Count: state.Count + 1 })),
        decreaseCount: () => set((state) => ({ Count: state.Count - 1 })),
        reset: () => set({ Count: 0 })
    }
))