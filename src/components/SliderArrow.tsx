import { Icon } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface SliderArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

const SliderArrow = ({ direction, onClick, disabled }: SliderArrowProps) => (
  <Icon
    as={direction === "right" ? MdChevronRight : MdChevronLeft}
    boxSize={10}
    aria-label={direction === "right" ? "قبلی" : "بعدی"}
    position="absolute"
    {...(direction === "right" ? { right: "8px" } : { left: "8px" })}
    top="50%"
    transform="translateY(-50%)"
    color="black"
    cursor={disabled ? "not-allowed" : "pointer"}
    zIndex={2}
    onClick={disabled ? undefined : onClick}
    _hover={{ color: disabled ? "black" : "blue.500" }}
    bg="none"
  />
);

export default SliderArrow;
