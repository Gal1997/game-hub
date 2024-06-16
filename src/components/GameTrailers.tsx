import { AspectRatio, Box, Heading } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: string | number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;
  if (trailers === (null || undefined) || trailers?.results["length"] == 0)
    return null;

  return (
    <Box>
      <Heading size="lg" marginY={5}>
        {" "}
        Trailer
      </Heading>
      <video
        width="1280"
        height="720"
        poster={trailers?.results[0].preview}
        controls
      >
        <source src={trailers?.results[0].data["max"]} />
      </video>
    </Box>
  );
};

export default GameTrailers;
