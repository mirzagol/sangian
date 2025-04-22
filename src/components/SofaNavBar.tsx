import { Flex, Heading, Icon } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { ColorModeButton } from "../components/ui/color-mode";

interface Props {
  onBack: () => void;
  name: string;
}

const SofaNavBar = ({ onBack, name }: Props) => (
  <Flex align="center" mb={4} justify="space-between">
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
    <ColorModeButton />
  </Flex>
);

export default SofaNavBar;
