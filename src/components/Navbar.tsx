import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // Adjust the path as necessary

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HStack width="100%" padding="10px">
        <Image src={logo} alt="Logo" boxSize="50px" />
        <Text fontSize="lg" fontWeight="bold">
          مبلمان سنگیان
        </Text>
        <Spacer />
      </HStack>
      {children}
    </>
  );
}
