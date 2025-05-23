import { SimpleGrid, Text } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import useSofas from "../hooks/useSofas";
import ItemCardSkeleton from "./ItemCardSkeleton";
import ItemCardContainer from "./ItemCardContainer";
import { useNavigate } from "react-router-dom";

interface SofaGridProps {
  selectedCategory: string | null; // Prop to filter sofas
}

const SofaGrid = ({ selectedCategory }: SofaGridProps) => {
  const { sofas, error, isLoading } = useSofas();
  const navigate = useNavigate();

  const filteredSofas = selectedCategory
    ? sofas.filter((sofa) => sofa.types.includes(selectedCategory)) // Filter sofas by category
    : sofas;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) {
    return <Text color="red.500">Failed to load sofas: {error}</Text>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      paddingX="10px"
      gap={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <ItemCardContainer key={skeleton}>
            <ItemCardSkeleton />
          </ItemCardContainer>
        ))}
      {filteredSofas.map((sofa) => (
        <ItemCardContainer key={sofa.id}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/sofa/${sofa.id}`)}
          >
            <ItemCard sofa={sofa} />
          </div>
        </ItemCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default SofaGrid;
