import { Card, Skeleton, SkeletonText, Box } from "@chakra-ui/react";

const BedSetSkeleton = () => {
  return (
    <Card.Root borderRadius="md" overflow="hidden">
      <Skeleton height="200px" width="100%" />
      <Box padding="10px">
        <SkeletonText mt="4" noOfLines={1} height="20px" />
      </Box>
    </Card.Root>
  );
};

export default BedSetSkeleton;
