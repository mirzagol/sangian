import { CoffeeTable } from "../hooks/useCoffeeTables";
import { Card } from "@chakra-ui/react";
import ImageWithFallback from "./ImageWithFallback";
interface Props {
  coffeeTable: CoffeeTable;
}

const CoffeeTableCard = ({ coffeeTable }: Props) => {
  return (
    <Card.Root borderRadius="md" overflow="hidden">
      <ImageWithFallback
        src={coffeeTable.image_path}
        alt={coffeeTable.name}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <Card.Body gap={10} padding="10px">
        <Card.Title
          fontSize="2xl"
          fontWeight="normal "
          textAlign="center"
          mb={3}
          mt={1}
        >
          {coffeeTable.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default CoffeeTableCard;
