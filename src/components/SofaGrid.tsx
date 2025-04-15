import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { Sofa } from "../hooks/useSofas";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import useSofas from "../hooks/useSofas";
import ItemCardSkeleton from "./ItemCardSkeleton";

const sofaGrid = () => {
  const { sofas, error, isLoading } = useSofas();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={10}>
      {isLoading &&
        skeletons.map((skeleton) => <ItemCardSkeleton key={skeleton} />)}
      {sofas.map((sofa) => (
        <ItemCard key={sofa.id} sofa={sofa} />
      ))}
    </SimpleGrid>
  );
};
export default sofaGrid;

/*
const sofaGrid = () => {
  const [sofas, setSofas] = React.useState<Sofa[]>([]);
  useEffect(() => {
    const sofaData: Sofa[] = [
      {
        id: 7,
        name: "مدل آتریسا",
        coverImage: "../assets/Images/Sofa/Covers/mobl1.jpeg",
      },
      {
        id: 8,
        name: "مدل مدرنیتا",
        coverImage: "../assets/Images/Sofa/Covers/mobl2.jpeg",
      },
      {
        id: 9,
        name: "مدل روستیکا",
        coverImage: "../assets/Images/Sofa/Covers/mobl3.jpeg",
      },
    ];
    setSofas(sofaData);
  }, []);

  return (
    <SimpleGrid columns={3} gap={10}>
      {sofas.map((sofa) => (
        <ItemCard key={sofa.id} sofa={sofa} />
      ))}
    </SimpleGrid>
  );
};
export default sofaGrid;
*/
