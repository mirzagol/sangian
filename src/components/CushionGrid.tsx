import { SimpleGrid, Text } from "@chakra-ui/react";
import useCushions from "../hooks/useCushions";
import CushionCard from "./CushionCard";
import BedSetSkeleton from "./BedSetSkeleton";

const CushionGrid = () => {
  const { cushions, error, isLoading } = useCushions();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text color="red.500">Error: {error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      paddingX="10px"
      gap={3}
      style={{ direction: "rtl" }} // Stack items from right
    >
      {isLoading &&
        skeletons.map((skeleton) => <BedSetSkeleton key={skeleton} />)}
      {!isLoading &&
        cushions.map((cushion) => (
          <CushionCard key={cushion.id} cushion={cushion} />
        ))}
    </SimpleGrid>
  );
};

export default CushionGrid;
