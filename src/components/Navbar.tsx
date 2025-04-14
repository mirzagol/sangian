import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import "@fontsource/vazirmatn";
import { ColorModeButton } from "../components/ui/color-mode";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HStack width="100%" padding="10px">
        <Image
          src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-png-1.png"
          alt="Logo"
          boxSize="50px"
        />
        <Text fontFamily="Vazirmatn" fontSize="lg" fontWeight="bold">
          مبلمان سنگیان
        </Text>
        <Spacer />
        <ColorModeButton />
      </HStack>
      {children}
    </>
  );
}
