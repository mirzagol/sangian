import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const ItemCardSkeleton = () => {
  return (
    <Card.Root>
      {" "}
      {/* Match the card structure */}
      <Skeleton height="200px" width="100%" borderRadius="md" />{" "}
      {/* Simulates the image */}
      <Card.Body padding="10px" gap="10">
        {" "}
        {/* Match the card body */}
        <SkeletonText mt="4" noOfLines={1} height="20px" />{" "}
        {/* Simulates the title */}
      </Card.Body>
      <Card.Footer padding="10px">
        <SkeletonText mt="2" noOfLines={2} gap="4" height="15px" />{" "}
        {/* Simulates the list */}
      </Card.Footer>
    </Card.Root>
  );
};

export default ItemCardSkeleton;
