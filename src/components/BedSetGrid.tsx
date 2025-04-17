import { SimpleGrid, Text } from "@chakra-ui/react";
import useBedSets from "../hooks/useBedSets";
import BedSetCard from "./BedSetCard";
import BedSetSkeleton from "./BedSetSkeleton";

const BedSetGrid = () => {
  const { bedSets, error, isLoading } = useBedSets();

  const skeletons = [1, 2, 3, 4];

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
        bedSets.map((bedSet) => <BedSetCard key={bedSet.id} bedSet={bedSet} />)}
    </SimpleGrid>
  );
};

export default BedSetGrid;
