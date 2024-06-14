import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(103%)",
        transitionDuration: "0.1s",
        transitionTimingFunction: "ease-out",
      }}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
