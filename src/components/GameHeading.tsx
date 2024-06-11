import { Heading } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const thePlatform = usePlatform(platformId);
  const theGenre = useGenre(genreId);

  var heading = `${thePlatform?.name || ""} ${theGenre?.name || ""} Games`;
  if (!thePlatform?.name && !theGenre?.name) heading = `All Games`;
  return (
    <Heading marginBottom={6} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
