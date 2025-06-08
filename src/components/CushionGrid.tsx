/*import { SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useCushions from "../hooks/useCushions";
import CushionCard from "./CushionCard";
import BedSetSkleton from "./BedSetSkeleton";

const CushionGrid = () => {
  const { cushions, error, isLoading } = useCushions();
  const navigate = useNavigate();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text color="red.500">Error: {error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      paddingX="10px"
      gap={3}
      style={{ direction: "rtl" }}
    >
      {isLoading &&
        skeletons.map((skeleton) => <BedSetSkleton key={skeleton} />)}
      {!isLoading &&
        cushions.map((cushion) => (
          <div
            key={cushion.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/cushion/${cushion.id}?category=cushion`)}
          >
            <CushionCard cushion={cushion} />
          </div>
        ))}
    </SimpleGrid>
  );
};

export default CushionGrid;
*/

import { Box, Text } from "@chakra-ui/react";

const CushionGrid = () => {
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

export default CushionGrid;
