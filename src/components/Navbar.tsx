import {
  HStack,
  Image,
  Text,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  // On mobile: left, on desktop: right
  const justify = useBreakpointValue({ base: "flex-start", md: "flex-end" });
  const direction = useBreakpointValue({ base: "row", md: "row-reverse" });

  return (
    <>
      <HStack
        width="100%"
        padding="10px"
        justifyContent={justify}
        flexDirection={direction}
      >
        <HStack cursor="pointer" onClick={() => navigate("/")}>
          <Text
            fontSize="lg"
            fontWeight="bold"
            display={{ base: "none", lg: "block" }}
          >
            مبلمان سنگیان
          </Text>
          <Image src={logo} alt="Logo" boxSize="50px" />
          <Text
            fontSize="lg"
            fontWeight="bold"
            display={{ base: "block", lg: "none" }}
          >
            مبلمان سنگیان
          </Text>
        </HStack>
        <Spacer display={{ base: "none", lg: "block" }} />
      </HStack>
      {children}
    </>
  );
}
