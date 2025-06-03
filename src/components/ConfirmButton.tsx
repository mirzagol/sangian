import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode, forwardRef } from "react";

interface ConfirmButtonProps extends ButtonProps {
  children?: ReactNode;
}

const ConfirmButton = forwardRef<HTMLButtonElement, ConfirmButtonProps>(
  ({ children = "تایید", ...props }, ref) => (
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
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  )
);

export default ConfirmButton;
