import { Flex, Icon } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

interface Props {
  onBack: () => void;
}

const SofaNavBar = ({ onBack }: Props) => (
  <Flex align="center" justify="space-between" p={4}>
    <Icon
      aria-label="Back to main menu"
      onClick={onBack}
      mr={2}
      scale={1.5}
      cursor="pointer"
    >
      <MdArrowBack />
    </Icon>
  </Flex>
);

export default SofaNavBar;
