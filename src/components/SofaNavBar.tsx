import { Flex, Heading, Icon } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

interface Props {
  onBack: () => void;
  name: string;
}

const SofaNavBar = ({ onBack, name }: Props) => (
  <Flex align="center" mb={4} justify="space-between" p={4}>
    <Icon
      aria-label="Back to main menu"
      onClick={onBack}
      mr={2}
      scale={2}
      cursor="pointer"
    >
      <MdArrowBack />
    </Icon>
    <Heading size="md">{name}</Heading>
  </Flex>
);

export default SofaNavBar;
