import { useEffect, useState, useRef } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ImageWithFallback from "./ImageWithFallback";

interface Props {
  images: string[];
  name: string;
}

const ANIMATION_DURATION = 300; // ms

const SofaImageSlider = ({ images, name }: Props) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Touch and mouse refs
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const mouseEndX = useRef<number | null>(null);

  // Preload all images on mount or when images change
  useEffect(() => {
    setCurrent(0);
    if (images) {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }
  }, [images]);

  // Animation helpers
  const animateTo = (nextIdx: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(nextIdx);
      setIsAnimating(false);
      setDirection(null);
    }, ANIMATION_DURATION);
  };

  const showPrev = () => {
    if (isAnimating) return;
    const nextIdx = current === 0 ? images.length - 1 : current - 1;
    animateTo(nextIdx, "right");
  };

  const showNext = () => {
    if (isAnimating) return;
    const nextIdx = current === images.length - 1 ? 0 : current + 1;
    animateTo(nextIdx, "left");
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      !isAnimating
    ) {
      const delta = touchStartX.current - touchEndX.current;
      if (Math.abs(delta) > 50) {
        if (delta > 0) showNext();
        else showPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse drag for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    mouseEndX.current = e.clientX;
    if (
      mouseStartX.current !== null &&
      mouseEndX.current !== null &&
      !isAnimating
    ) {
      const delta = mouseStartX.current - mouseEndX.current;
      if (Math.abs(delta) > 50) {
        if (delta > 0) showNext();
        else showPrev();
      }
    }
    mouseStartX.current = null;
    mouseEndX.current = null;
  };

  if (!images || images.length === 0) return null;

  // Animation styles
  let transition = isAnimating
    ? `transform ${ANIMATION_DURATION}ms`
    : undefined;
  let transform = "translateX(0)";
  if (isAnimating && direction === "left") transform = "translateX(-100%)";
  if (isAnimating && direction === "right") transform = "translateX(100%)";

  return (
    <Box
      position="relative"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      bg="gray.50"
      display="flex"
      alignItems="center"
      justifyContent="center"
      aspectRatio="16 / 9"
      width="100%"
      maxW="100%"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      userSelect="none"
      cursor={isAnimating ? "wait" : "grab"}
    >
      <SliderImage
        src={images[current]}
        alt={name}
        transition={transition}
        transform={transform}
      />
      {images.length > 1 && (
        <>
          <SliderArrow
            direction="right"
            onClick={showNext}
            disabled={isAnimating}
          />
          <SliderArrow
            direction="left"
            onClick={showPrev}
            disabled={isAnimating}
          />
          <SliderDots
            images={images}
            current={current}
            isAnimating={isAnimating}
            setCurrent={setCurrent}
          />
        </>
      )}
    </Box>
  );
};

export default SofaImageSlider;

// --- Subcomponents ---

interface SliderImageProps {
  src: string;
  alt: string;
  transition?: string;
  transform?: string;
}
const SliderImage = ({ src, alt, transition, transform }: SliderImageProps) => (
  <Box
    width="100%"
    height="100%"
    style={{
      transition,
      transform,
      position: "absolute",
      top: 0,
      left: 0,
    }}
  >
    <ImageWithFallback
      src={src}
      alt={alt}
      width="100%"
      height="100%"
      objectFit="cover"
      aspectRatio="16/9"
      display="block"
    />
  </Box>
);

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

interface SliderDotsProps {
  images: string[];
  current: number;
  isAnimating: boolean;
  setCurrent: (idx: number) => void;
}
const SliderDots = ({
  images,
  current,
  isAnimating,
  setCurrent,
}: SliderDotsProps) => (
  <Flex
    position="absolute"
    bottom="10px"
    left="0"
    right="0"
    justify="center"
    gap={2}
    zIndex={2}
  >
    {images.map((_, idx) => (
      <Box
        key={idx}
        w="8px"
        h="8px"
        borderRadius="full"
        bg={idx === current ? "blue.500" : "gray.300"}
        border="1px solid white"
        cursor={isAnimating ? "not-allowed" : "pointer"}
        onClick={() => !isAnimating && setCurrent(idx)}
      />
    ))}
  </Flex>
);
