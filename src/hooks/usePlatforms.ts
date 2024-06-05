import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { AxiosError } from "axios";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, AxiosError>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours ( 1 = 0.001 second)
  });

export default usePlatforms;
