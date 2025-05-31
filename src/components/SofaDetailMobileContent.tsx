import { useRef, useState, useEffect } from "react";
import { Box, AspectRatio, Button } from "@chakra-ui/react";
import SofaNavBar from "./SofaNavBar";
import SofaImageSlider from "./SofaImageSlider";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import Skeleton from "react-loading-skeleton";

const GAP_DEFAULT = 24; // px

const SofaDetailMobileContent = ({
  navigate,
  info,
  images,
  imagesLoading,
  frames,
  fabrics,
  selectedFrame,
  selectedFabric,
  setSelectedFrame,
  setSelectedFabric,
}: any) => {
  const [scrolled, setScrolled] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setScrolled(rect.top <= GAP_DEFAULT);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box bg="gray.50" minH="100vh" display="flex" flexDirection="column">
      {/* Top NavBar */}
      <Box>
        <SofaNavBar
          onBack={() => navigate("/")}
          name={info?.model_name || ""}
        />
      </Box>
      {/* Fixed 16:9 Image Slider with gap from screen edges */}
      <Box position="relative" mx={2} mt={GAP_DEFAULT}>
        <AspectRatio ratio={16 / 9}>
          {imagesLoading ? (
            <Skeleton height="100%" />
          ) : (
            info && <SofaImageSlider images={images} name={info.model_name} />
          )}
        </AspectRatio>
        {/* Blurry overlay when scrolled */}
        <Box
          pointerEvents="none"
          position="absolute"
          inset={0}
          bg="rgba(255,255,255,0.5)"
          style={{
            backdropFilter: scrolled ? "blur(8px)" : "none",
            opacity: scrolled ? 1 : 0,
            transition: "backdrop-filter 0.4s, opacity 0.4s",
          }}
        />
      </Box>
      {/* Card-like Section with gap from image */}
      <Box
        ref={cardRef}
        bg="white"
        borderRadius="2xl"
        boxShadow="md"
        mt={GAP_DEFAULT}
        mx={2}
        p={5}
        zIndex={1}
        position="relative"
        display="flex"
        flexDirection="column"
        gap={4}
        transition="margin-top 0.4s"
      >
        {/* Model Name */}
        <Box textAlign="center" fontSize="2xl" fontWeight="bold" mb={2}>
          {info?.model_name}
        </Box>
        {/* Sofa Color Pickers */}
        <SofaColorPickers
          frames={frames}
          fabrics={fabrics}
          selectedFrame={selectedFrame}
          selectedFabric={selectedFabric}
          onFrameSelect={setSelectedFrame}
          onFabricSelect={setSelectedFabric}
        />
        {/* Description */}
        <SofaDescription description={info?.description || ""} />
        {/* Confirm Button */}
        <Button
          mt={6}
          mb={2}
          size="lg"
          width="100%"
          borderRadius="full"
          bg="gray.800"
          color="white"
          fontWeight="bold"
          fontSize="xl"
          _hover={{ bg: "gray.900" }}
        >
          تایید
        </Button>
      </Box>
    </Box>
  );
};

export default SofaDetailMobileContent;
