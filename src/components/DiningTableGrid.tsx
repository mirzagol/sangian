/*import { SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useDiningTables from "../hooks/useDiningTables";
import DiningTableCard from "./DiningTableCard";
import BedSetSkeleton from "./BedSetSkeleton";

const DiningTableGrid = () => {
  const { diningTables, error, isLoading } = useDiningTables();
  const navigate = useNavigate();

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
        diningTables.map((diningTable) => (
          <div
            key={diningTable.id}
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/diningtable/${diningTable.id}?category=diningTable`)
            }
          >
            <DiningTableCard diningTable={diningTable} />
          </div>
        ))}
    </SimpleGrid>
  );
};

export default DiningTableGrid;
*/

import { Box, Text } from "@chakra-ui/react";

const DiningTableGrid = () => {
  return (
    <Box
      bg="white"
      width="100%"
      maxW="500px"
      mx="auto"
      mt={10}
      p={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
    >
      <Text
        fontSize="3xl"
        fontWeight="light"
        color="gray.700"
        textAlign="center"
        style={{ direction: "rtl" }}
      >
        این صفحه بزودی اضافه میشود...
      </Text>
    </Box>
  );
};

export default DiningTableGrid;
