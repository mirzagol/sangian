import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { Sofa } from "../hooks/useSofas";
import { SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import useSofas from "../hooks/useSofas";

const sofaGrid = () => {
  const { sofas, error } = useSofas();

  return (
    <SimpleGrid columns={3} gap={10}>
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
