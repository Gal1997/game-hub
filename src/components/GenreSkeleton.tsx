import {
  Box,
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack marginBottom={5}>
      <Skeleton width="20%" height="32px" borderRadius={8}></Skeleton>
      <Skeleton width="80%" height="17px" />
    </HStack>
  );
};

export default GenreSkeleton;
