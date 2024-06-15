import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const params = useParams();

  return (
    <Grid
      marginY={10}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={10}
    >
      <GridItem gridRow={1} gridColumn={1}>
        <>
          <Text color="gray.600" fontWeight="bold">
            Platforms
          </Text>
          {game?.parent_platforms.map((platform) => (
            <Text>{platform.platform.name}</Text>
          ))}
        </>
      </GridItem>
      <GridItem gridRow={1} gridColumn={2}>
        <>
          <Text color="gray.600" fontWeight="bold">
            Metascore
          </Text>
          <CriticScore score={game!.metacritic}></CriticScore>
        </>
      </GridItem>
      <GridItem gridRow={2} gridColumn={1}>
        <>
          <Text color="gray.600" fontWeight="bold">
            Genres
          </Text>
          {game?.genres.map((genre) => (
            <Text>{genre.name}</Text>
          ))}
        </>
      </GridItem>
      <GridItem gridRow={2} gridColumn={2}>
        <>
          <Text color="gray.600" fontWeight="bold">
            Publishers
          </Text>
          {game?.publishers.map((publisher) => (
            <Text>{publisher.name}</Text>
          ))}
        </>
      </GridItem>
    </Grid>
  );
};

export default GameAttributes;
