import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ItemCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius="lg">
      {children}
    </Box>
  );
};

export default ItemCardContainer;
