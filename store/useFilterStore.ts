import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { StateStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

// Create the MMKV instance
const storage = new MMKV();

// Create the Zustand storage adapter
const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

// Define your filter store state type
interface FilterState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

// Create the persisted store
export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      selectedCategory: 'All', // Default value
      setSelectedCategory: (category) => set({ selectedCategory: category }),
    }),
    {
      name: 'filter-storage', // Unique name for this storage
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);