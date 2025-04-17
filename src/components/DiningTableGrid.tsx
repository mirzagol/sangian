import { SimpleGrid, Text } from "@chakra-ui/react";
import useDiningTables from "../hooks/useDiningTables";
import DiningTableCard from "./DiningTableCard";
import DiningTableSkeleton from "./DiningTableSkeleton";
import ItemCardContainer from "./ItemCardContainer";
const DiningTableGrid = () => {
  const { diningTables, error, isLoading } = useDiningTables();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text color="red.500">Error: {error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      paddingX="10px"
      gap={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <ItemCardContainer key={skeleton}>
            <DiningTableSkeleton />
          </ItemCardContainer>
        ))}
      {!isLoading &&
        diningTables.map((diningTable) => (
          <ItemCardContainer key={diningTable.id}>
            <DiningTableCard diningTable={diningTable} />
          </ItemCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default DiningTableGrid;
