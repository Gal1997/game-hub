import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortingMethod: string | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
         "aside main"`,
      }}
      templateColumns={{
        base: "1fr", // on Phone take whole space
        lg: "200px 1fr", // on tablet/PC give 'aside' (genres) 200px , the rest to main
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2.5}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platformId) => {
                setGameQuery({ ...gameQuery, platformId });
              }}
            />
            <SortSelector
              onSelectSortingMethod={(sortingMethod) =>
                setGameQuery({ ...gameQuery, sortingMethod })
              }
              selectedSortingMethod={gameQuery.sortingMethod}
            ></SortSelector>
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
