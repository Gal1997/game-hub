import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: allGenres } = useGenres();
  const thePlatform = usePlatform(gameQuery.platformId);
  const theGenre = useGenre(gameQuery.genreId);

  var heading = `${thePlatform?.name || ""} ${theGenre?.name || ""} Games`;
  if (!thePlatform?.name && !theGenre?.name) heading = `All Games`;
  return (
    <Heading marginBottom={6} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
