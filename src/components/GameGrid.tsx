import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import useGameQueryStore from "../store";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { gameQuery } = useGameQueryStore();
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage} // similar to writing hasNextPage || false , !! will convert undefined to false.
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="10px"
        marginEnd={{ lg: "25px", xl: "75" }}
        margin={{ sm: 5, md: 5 }}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={{ sm: 6, md: 6, lg: 6, xl: 8 }}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {!isLoading &&
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
