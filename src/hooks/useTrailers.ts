import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

import { Trailer } from "../entities/Trailer";

const useTrailers = (id: string | number) => {
  const apiClient = new APIClient<Trailer>("/games/" + id + "/movies");
  return useQuery({
    queryKey: ["game", id, "trailer"],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
