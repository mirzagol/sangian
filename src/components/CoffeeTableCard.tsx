import { CoffeeTable } from "../hooks/useCoffeeTables";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  coffeeTable: CoffeeTable;
}

const CoffeeTableCard = ({ coffeeTable }: Props) => {
  return (
    <Card.Root borderRadius="md" overflow="hidden">
      <Image
        src={coffeeTable.image_path}
        alt={coffeeTable.name}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <Card.Body gap={10} padding="10px">
        <Card.Title fontSize="3ßxl" fontWeight="black" textAlign="center">
          {coffeeTable.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default CoffeeTableCard;
