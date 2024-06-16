import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

import { Screenshots } from "../entities/Screenshot";

const useScreenshots = (id: string | number) => {
  const apiClient = new APIClient<Screenshots>("/games/" + id + "/screenshots");
  return useQuery({
    queryKey: ["game", id, "screenshots"],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
