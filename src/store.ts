import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortingMethod?: string;
  searchText?: string;
}
type GameQueryStore = {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id?: number) => void;
  setSortingMethod: (method: string) => void;
  setSearchText: (text: string) => void;
};

const useGameQueryStore = create<GameQueryStore>()((set) => ({
  gameQuery: {
    genreId: undefined,
    platformId: undefined,
    sortingMethod: undefined,
    searchText: undefined,
  },
  setGenreId: (id: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId: id } })),
  setPlatformId: (id?: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId: id } })),
  setSortingMethod: (method: string) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortingMethod: method },
    })),
  setSearchText: (text: string) =>
    set((state) => ({ gameQuery: { searchText: text } })),
  // We didn't spread gameQuery because when searching we want to remove others properties! make them undefined
}));

export default useGameQueryStore;
