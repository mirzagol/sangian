import { Button } from "@chakra-ui/react";

const ConfirmButton = ({ onClick }: { onClick?: () => void }) => (
  <Button
    mt={6}
    mb={2}
    size="lg"
    width="100%"
    borderRadius="full"
    bg="gray.800"
    color="white"
    fontWeight="bold"
    fontSize="xl"
    _hover={{ bg: "gray.900" }}
    onClick={onClick}
  >
    تایید
  </Button>
);

export default ConfirmButton;
