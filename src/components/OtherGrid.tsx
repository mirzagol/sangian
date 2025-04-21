import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useOthers from "../hooks/useOthers";
import OtherCard from "./OtherCard";
import BedSetSkeleton from "./BedSetSkeleton";

const OtherGrid = () => {
  const { others, error, isLoading } = useOthers();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text color="red.500">Error: {error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      paddingX="10px"
      gap={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => <BedSetSkeleton key={skeleton} />)}
      {!isLoading &&
        others.map((other) => <OtherCard key={other.id} other={other} />)}
    </SimpleGrid>
  );
};

export default OtherGrid;
