import { Box, AspectRatio, Grid } from "@chakra-ui/react";
import ItemNavBar from "./ItemNavBar";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import Skeleton from "react-loading-skeleton";
import Footer from "./Footer";
import ConfirmButton from "./ConfirmButton";
import SofaImageSlider from "./SofaImageSlider";
import ItemCoverDialog from "./ItemCoverDialog";
import { useEffect, useRef, useState } from "react";

const GAP_DEFAULT = 24;

const CoffeeTableDetailMobileContent = ({
  navigate,
  info,
  images,
  imagesLoading,
  frames,
  selectedFrame,
  setSelectedFrame,
}: any) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [imagesReady, setImagesReady] = useState(false);
  const firstLoad = useRef(true);

  // Helper to check if we can hide the skeleton
  const canHideSkeleton =
    !imagesLoading &&
    Array.isArray(images) &&
    images.length > 0 &&
    Array.isArray(frames) &&
    frames.length > 0 &&
    imagesReady &&
    firstLoad.current;

  useEffect(() => {
    if (canHideSkeleton) {
      setShowSkeleton(false);
      firstLoad.current = false;
    }
  }, [imagesLoading, images, frames, imagesReady]);

  // Reset imagesReady if images array changes (e.g., on option change)
  useEffect(() => {
    setImagesReady(false);
  }, [images]);

  // Handler for image load
  const handleImageLoad = () => setImagesReady(true);

  const handleConfirm = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <Box bg="gray.50" minH="100vh" display="flex" flexDirection="column">
      {showSkeleton ? (
        <Box p={4}>
          <Box mb={4}>
            <Skeleton height={40} width={40} /> {/* NavBar Skeleton */}
          </Box>
          <Grid templateColumns="1fr" gap={6} alignItems="start">
            <Box order={1} position="relative" width="100%" paddingTop="56.25%">
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
              >
                <Skeleton width="100%" height="100%" />{" "}
                {/* Image Slider Skeleton 16:9 */}
              </Box>
            </Box>
            <Box order={2}>
              <Skeleton count={6} height={32} style={{ marginBottom: 8 }} />{" "}
              {/* Color Pickers Skeleton */}
            </Box>
          </Grid>
          <Box mt={6}>
            <Skeleton count={3} /> {/* Description Skeleton */}
          </Box>
        </Box>
      ) : (
        <>
          <Box>
            <ItemNavBar onBack={navigate} />
          </Box>
          <Box position="relative" width="100%">
            <Box
              position="sticky"
              top={0}
              borderRadius="2xl"
              mx={2}
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
                  <Skeleton width="100%" height="100%" />
                ) : (
                  <>
                    <SofaImageSlider images={images} name={info?.name || ""} />
                    {/* Preload first image to detect when it's loaded */}
                    <img
                      src={images?.[0]}
                      alt="preload"
                      style={{ display: "none" }}
                      onLoad={handleImageLoad}
                    />
                  </>
                )}
              </AspectRatio>
              <Box
                pointerEvents="none"
                position="absolute"
                inset={0}
                bg="rgba(255,255,255,0.5)"
                style={{
                  backdropFilter: "none",
                  opacity: 0,
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
                transform: "none",
                transition: "all 0.4s",
              }}
            >
              <Box textAlign="center" fontSize="2xl" fontWeight="bold" mb={2}>
                {info?.name || <Skeleton width={120} />}
              </Box>
              <SofaColorPickers
                frames={frames}
                fabrics={[]} // Only frame picker
                selectedFrame={selectedFrame}
                selectedFabric={null}
                onFrameSelect={setSelectedFrame}
                onFabricSelect={() => {}}
              />
              {imagesLoading ? (
                <Skeleton count={3} />
              ) : (
                <SofaDescription description={info?.description || ""} />
              )}
              <ConfirmButton onClick={handleConfirm} />
              <ItemCoverDialog
                isOpen={dialogOpen}
                onClose={handleDialogClose}
                image={images?.[0]}
                name={info?.name}
                frame={selectedFrame?.name}
                id={info?.id}
                furnitureType="coffee_table"
              />
            </Box>
          </Box>
          <Footer />
        </>
      )}
    </Box>
  );
};

export default CoffeeTableDetailMobileContent;
