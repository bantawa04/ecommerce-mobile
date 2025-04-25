import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define your filter store state type
interface FilterState {
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  isSelected: (category: string) => boolean;
  clearCategories: () => void;
}

// Create the persisted store with AsyncStorage
export const useFilterStore = create<FilterState>()(
  persist(
    (set, get) => ({
      selectedCategories: ['All'], // Default value
      toggleCategory: (category) => set((state) => {
        // If "All" is selected or being selected, handle special case
        if (category === 'All') {
          return { selectedCategories: ['All'] };
        }
        
        // Create a copy of the current selection
        const newSelection = [...state.selectedCategories];
        
        // If "All" is in the current selection, remove it
        if (newSelection.includes('All')) {
          newSelection.splice(newSelection.indexOf('All'), 1);
        }
        
        // Toggle the selected category
        if (newSelection.includes(category)) {
          // If category exists, remove it
          const index = newSelection.indexOf(category);
          newSelection.splice(index, 1);
          
          // If no categories left, select "All"
          if (newSelection.length === 0) {
            return { selectedCategories: ['All'] };
          }
        } else {
          // If category doesn't exist, add it
          newSelection.push(category);
        }
        
        return { selectedCategories: newSelection };
      }),
      isSelected: (category) => {
        return get().selectedCategories.includes(category);
      },
      clearCategories: () => set({ selectedCategories: ['All'] }),
    }),
    {
      name: 'filter-storage', // Unique name for this storage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);