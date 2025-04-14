import { HStack, Image, Text } from "@chakra-ui/react";
import "@fontsource/vazirmatn";

const Navbar = () => {
  return (
    <HStack>
      <Image
        src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-png-1.png"
        alt="Logo"
        boxSize="50px"
      />
      <Text fontFamily="Vazirmatn" fontSize="lg" fontWeight={"bold"}>
        مبلمان سنگیان
      </Text>
    </HStack>
  );
};

export default Navbar;
