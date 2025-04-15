import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const ItemCardSkeleton = () => {
  return (
    <Card.Root width="320px" borderRadius="lg">
      <Card.Body gap="10">
        <Skeleton height="200px" borderRadius="md" />{" "}
        {/* Simulates the image */}
        <SkeletonText mt="2" noOfLines={1} height="20px" />{" "}
        {/* Simulates the title */}
      </Card.Body>
      <Card.Footer>
        <SkeletonText mt="2" noOfLines={1} gap="2" height="10px" />{" "}
        {/* Simulates the list */}
      </Card.Footer>
    </Card.Root>
  );
};

export default ItemCardSkeleton;
