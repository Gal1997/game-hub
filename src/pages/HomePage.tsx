import { Show, GridItem, HStack, Box, Grid } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr", // on Phone take whole space
        lg: "200px 1fr", // on tablet/PC give 'aside' (genres) 200px , the rest to main
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2.5}>
          <GameHeading></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector></SortSelector>
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
