import { useRef, useState, useEffect } from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
import ItemNavBar from "./ItemNavBar";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import Skeleton from "react-loading-skeleton";
import Footer from "./Footer";
import ConfirmButton from "./ConfirmButton";
import SofaImageSlider from "./SofaImageSlider";

const GAP_DEFAULT = 24;

const DiningTableDetailMobileContent = ({
  navigate,
  info,
  images,
  imagesLoading,
  frames,
  selectedFrame,
  setSelectedFrame,
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
      <Box>
        <ItemNavBar onBack={() => navigate("/catalog")} />
      </Box>
      <Box position="relative" width="100%">
        <Box
          position="sticky"
          top={0}
          borderRadius="2xl"
          mx={2}
          ref={cardRef}
          boxShadow="md"
          flexDirection="column"
          gap={4}
          zIndex={1}
          overflow="hidden"
          width="calc(100% - 16px)"
          marginBottom={4}
          bg="white"
        >
          <AspectRatio ratio={16 / 9} width="100%">
            {imagesLoading ? (
              <Skeleton height="100%" />
            ) : (
              <SofaImageSlider images={images} name={info.name} />
            )}
          </AspectRatio>
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
            zIndex={2}
          />
        </Box>
        <Box
          position="relative"
          bg="white"
          borderRadius="2xl"
          boxShadow="md"
          mt={`-${GAP_DEFAULT / 2}px`}
          mx={2}
          p={5}
          zIndex={3}
          width="calc(100% - 16px)"
          margin="0 auto"
          display="flex"
          flexDirection="column"
          gap={4}
          transition="all 0.4s"
          style={{
            transform: scrolled ? "translateY(-8px) scale(1.01)" : "none",
            transition: "all 0.4s",
          }}
        >
          <Box textAlign="center" fontSize="2xl" fontWeight="bold" mb={2}>
            {info.name}
          </Box>
          <SofaColorPickers
            frames={frames}
            fabrics={[]} // Only frame picker
            selectedFrame={selectedFrame}
            selectedFabric={null}
            onFrameSelect={setSelectedFrame}
            onFabricSelect={() => {}}
          />
          <SofaDescription description={info.description} />
          <ConfirmButton />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default DiningTableDetailMobileContent;
