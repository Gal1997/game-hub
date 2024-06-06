import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: allGenres } = useGenres();
  const { data: allPlatforms } = usePlatforms();

  const theGenre = allGenres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const thePlatform = allPlatforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  var heading = `${thePlatform?.name || ""} ${theGenre?.name || ""} Games`;
  if (!thePlatform?.name && !theGenre?.name) heading = `All Games`;
  return (
    <Heading marginBottom={6} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
