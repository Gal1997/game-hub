import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  var heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  if (!gameQuery.platform?.name && !gameQuery.genre?.name)
    heading = `All Games`;
  return (
    <Heading marginBottom={6} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
