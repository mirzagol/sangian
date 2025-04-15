import React from "react";
import { Sofa } from "../hooks/useSofas";
import { Card, Image, List, ListItem } from "@chakra-ui/react";

interface Props {
  sofa: Sofa;
}

const ItemCard = ({ sofa }: Props) => {
  return (
    <Card.Root width="320px" borderRadius="lg">
      <Card.Body gap="10">
        <Image
          src={sofa.coverImage}
          alt={sofa.name}
          objectFit="cover"
          borderRadius="md"
        />

        <Card.Title fontSize="3xl" fontWeight="black" textAlign="center">
          {sofa.name}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <List.Root gap={2} dir="rtl" textAlign="right">
          {sofa.types.map((type, index) => (
            <ListItem key={index} fontSize="sm" fontWeight={"thin"}>
              {type}
            </ListItem>
          ))}
        </List.Root>
      </Card.Footer>
    </Card.Root>
  );
};

export default ItemCard;
