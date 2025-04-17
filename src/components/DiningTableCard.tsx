// filepath: /Users/hosseinmirzagol/sangian/src/components/DiningTableCard.tsx
import React from "react";
import { DiningTable } from "../hooks/useDiningTables";
import { Card, Image, Text, Box } from "@chakra-ui/react";

interface Props {
  diningTable: DiningTable;
}

const DiningTableCard = ({ diningTable }: Props) => {
  return (
    <Card.Root borderRadius="md" overflow="hidden" gap={2}>
      <Image
        src={diningTable.image_path}
        alt={diningTable.name}
        width="100%"
        height="200px"
        objectFit="cover"
      />

      <Card.Body gap={10} padding="10px">
        <Card.Title fontSize="3xl" fontWeight="black" textAlign="center">
          {diningTable.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default DiningTableCard;
