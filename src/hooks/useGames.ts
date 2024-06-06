import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig } from "axios";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  /* useInfiniteQuery will return an array of FetchResponse<Game> (instead of a single one)
     and it is because it is paginated , meaning that the data is now split into groups (pages) and 
     is no longer a single page (hence return type is now array)
     This forces us to map twice in GameGrid.tsx:
     * first - map each page to a react fragment
     * second - map each game in that fragment into a GameCard  */
  useInfiniteQuery<FetchResponse<Game>, AxiosError>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortingMethod,
          search: gameQuery.searchText,
          _start: (pageParam - 1) * gameQuery.pageSize,
          _limit: gameQuery.pageSize,
          page: pageParam,
          page_size: 16, // Each chunk of fetched games will be 16
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPagesFetched) => {
      return lastPage.next ? allPagesFetched.length + 1 : undefined;
    },
  });

export default useGames;
