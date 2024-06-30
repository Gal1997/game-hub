import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import  Game  from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  /* useInfiniteQuery will return an array of FetchResponse<Game> (instead of a single one)
     and it is because it is paginated , meaning that the data is now split into groups (pages) and 
     is no longer a single page (hence return type is now array)
     This forces us to map twice in GameGrid.tsx:
     * first - map each page to a react fragment
     * second - map each game in that fragment into a GameCard  */
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, AxiosError>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortingMethod,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: 16, // Each chunk of fetched games will be 16
        },
      }),
    staleTime: ms("24h"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPagesFetched) => {
      return lastPage.next ? allPagesFetched.length + 1 : undefined;
    },
  });
};
export default useGames;
