import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import useSofas from "../hooks/useSofas";
import ItemCardSkeleton from "./ItemCardSkeleton";
import ItemCardContainer from "./ItemCardContainer";

const SofaGrid = () => {
  const { sofas, error, isLoading } = useSofas();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={3}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ItemCardContainer key={skeleton}>
            <ItemCardSkeleton /> {/* Ensure skeleton matches card dimensions */}
          </ItemCardContainer>
        ))}
      {sofas.map((sofa) => (
        <ItemCardContainer key={sofa.id}>
          <ItemCard sofa={sofa} />
        </ItemCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default SofaGrid;
