import {
  Text,
  Heading,
  Spinner,
  Box,
  Image,
  HStack,
  Flex,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailers from "../components/GameTrailers";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
      <GridItem>
        <Flex>
          <Image
            marginEnd={5}
            marginTop={2}
            src={game.background_image}
            boxSize="150px"
            objectFit="cover"
            rounded={40}
          ></Image>
          <Box>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
          </Box>
        </Flex>
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <Box padding={5}>
          <GameTrailers gameId={game.id}></GameTrailers>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
