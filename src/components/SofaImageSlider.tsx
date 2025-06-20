import { useEffect, useState, useRef } from "react";
import { Box } from "@chakra-ui/react";
//import {useBreakpointValue } from "@chakra-ui/react";}
import SliderImage from "./SliderImage";
import SliderArrow from "./SliderArrow";
import SliderDots from "./SliderDots";

interface Props {
  images: string[];
  name: string;
}

const ANIMATION_DURATION = 350; // ms

const SofaImageSlider = ({ images, name }: Props) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const mouseEndX = useRef<number | null>(null);

  //const isLg = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    setCurrent(0);
    if (!images || images.length === 0) {
      setLoading(false);
      return;
    }
    let loaded = 0;
    setLoading(true);
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loaded += 1;
        if (loaded === images.length) {
          setLoading(false);
        }
      };
      img.onerror = () => {
        loaded += 1;
        if (loaded === images.length) {
          setLoading(false);
        }
      };
    });
  }, [images]);

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
    animateTo(nextIdx, "left");
  };

  const showNext = () => {
    if (isAnimating) return;
    const nextIdx = current === images.length - 1 ? 0 : current + 1;
    animateTo(nextIdx, "right");
  };

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
        if (delta > 0) showPrev();
        else showNext();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

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
        if (delta > 0) showPrev();
        else showNext();
      }
    }
    mouseStartX.current = null;
    mouseEndX.current = null;
  };

  if (!images || images.length === 0) return null;

  let transition = isAnimating
    ? `transform ${ANIMATION_DURATION}ms`
    : undefined;
  let transform = "translateX(0)";
  if (isAnimating && direction === "left") transform = "translateX(-100%)";
  if (isAnimating && direction === "right") transform = "translateX(100%)";

  return (
    <Box
      position="relative"
      padding={0}
      borderRadius={"2xl"}
      overflow="hidden"
      boxShadow={{ lg: "md" }}
      bg={{ lg: "gray.50" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      aspectRatio="16 / 9"
      width="100%"
      maxW="100%"
      onTouchStart={images.length > 1 ? handleTouchStart : undefined}
      onTouchMove={images.length > 1 ? handleTouchMove : undefined}
      onTouchEnd={images.length > 1 ? handleTouchEnd : undefined}
      onMouseDown={images.length > 1 ? handleMouseDown : undefined}
      onMouseUp={images.length > 1 ? handleMouseUp : undefined}
      userSelect="none"
      cursor={isAnimating || images.length === 1 ? "default" : "pointer"}
    >
      <SliderImage
        src={images[current]}
        alt={name}
        transition={transition}
        transform={transform}
        loading={loading}
      />
      {images.length > 1 && (
        <>
          {
            <SliderArrow
              direction="right"
              onClick={showPrev}
              disabled={isAnimating}
            />
          }
          {
            <SliderArrow
              direction="left"
              onClick={showNext}
              disabled={isAnimating}
            />
          }
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
