import { Image, SimpleGrid, Heading, Skeleton } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);
  console.log(screenshots?.results);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Heading size="lg" marginY={5}>
        Screenshots
      </Heading>
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={6}
        maxWidth="1280"
      >
        {" "}
        {isLoading &&
          skeletons.map((skeleton) => (
            <Skeleton
              height={"fill"}
              key={skeleton}
              rounded={20}
              aspectRatio={16 / 9}
            ></Skeleton>
          ))}
        {!isLoading &&
          screenshots?.results?.map((screenshot) => (
            <Image
              rounded={20}
              key={screenshot.id}
              src={screenshot.image}
            ></Image>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
