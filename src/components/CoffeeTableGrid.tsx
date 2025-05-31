import { SimpleGrid, Text } from "@chakra-ui/react";
import useCoffeeTables from "../hooks/useCoffeeTables";
import CoffeeTableCard from "./CoffeeTableCard";
import CoffeeTableSkeleton from "./CoffeeTableSkeleton";

const CoffeeTableGrid = () => {
  const { coffeeTables, error, isLoading } = useCoffeeTables();

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
        skeletons.map((skeleton) => <CoffeeTableSkeleton key={skeleton} />)}
      {!isLoading &&
        coffeeTables.map((coffeeTable) => (
          <CoffeeTableCard key={coffeeTable.id} coffeeTable={coffeeTable} />
        ))}
    </SimpleGrid>
  );
};

export default CoffeeTableGrid;
