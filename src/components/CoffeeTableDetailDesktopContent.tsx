import { Box, Grid, AspectRatio } from "@chakra-ui/react";
import ItemNavBar from "./ItemNavBar";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import Skeleton from "react-loading-skeleton";
import ConfirmButton from "./ConfirmButton";
import Footer from "./Footer";
import SofaImageSlider from "./SofaImageSlider";
import ItemCoverDialog from "./ItemCoverDialog";
import { useEffect, useRef, useState } from "react";

const CoffeeTableDetailDesktopContent = ({
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
  const firstLoad = useRef(true);

  useEffect(() => {
    if (!imagesLoading && frames && frames.length > 0 && firstLoad.current) {
      setShowSkeleton(false);
      firstLoad.current = false;
    }
  }, [imagesLoading, frames]);

  const handleConfirm = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg="gray.50">
      <Box flex="1">
        <Box paddingX={4}>
          <ItemNavBar onBack={navigate} />
          {showSkeleton ? (
            <Grid templateColumns="1fr 2fr" gap={6} alignItems="start">
              <Box order={2} borderRadius="2xl">
                <AspectRatio ratio={16 / 9}>
                  <Skeleton width="100%" height="100%" />
                </AspectRatio>
              </Box>
              <Box
                order={1}
                height="100%"
                display="flex"
                flexDirection="column"
                borderRadius="2xl"
                bg="white"
                p={7}
                boxShadow="lg"
                minWidth="320px"
              >
                <Box
                  fontWeight="bold"
                  fontSize="2xl"
                  mb={2}
                  mt={3}
                  textAlign="center"
                  letterSpacing="wide"
                >
                  <Skeleton width={120} />
                </Box>
                <Box my={3}>
                  <Box borderBottom="1px solid #e2e8f0" mb={4} />
                  <Skeleton count={6} height={32} style={{ marginBottom: 8 }} />
                </Box>
                <Box mt="auto">
                  <Skeleton height={40} />
                </Box>
              </Box>
            </Grid>
          ) : (
            <Grid templateColumns="1fr 2fr" gap={6} alignItems="start">
              <Box order={2} borderRadius="2xl">
                <AspectRatio ratio={16 / 9}>
                  {imagesLoading ? (
                    <Skeleton width="100%" height="100%" />
                  ) : (
                    <SofaImageSlider images={images} name={info?.name || ""} />
                  )}
                </AspectRatio>
              </Box>
              <Box
                order={1}
                height="100%"
                display="flex"
                flexDirection="column"
                borderRadius="2xl"
                bg="white"
                p={7}
                boxShadow="lg"
                minWidth="320px"
              >
                <Box
                  fontWeight="bold"
                  fontSize="2xl"
                  mb={2}
                  mt={3}
                  textAlign="center"
                  letterSpacing="wide"
                >
                  {info?.name || <Skeleton width={120} />}
                </Box>
                <Box my={3}>
                  <Box borderBottom="1px solid #e2e8f0" mb={4} />
                  <SofaColorPickers
                    frames={frames}
                    fabrics={[]} // Only frame picker
                    selectedFrame={selectedFrame}
                    selectedFabric={null}
                    onFrameSelect={setSelectedFrame}
                    onFabricSelect={() => {}}
                  />
                </Box>
                <Box mt="auto">
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
            </Grid>
          )}
          {/* Description section with skeleton */}
          {showSkeleton ? (
            <Box mt={6}>
              <Skeleton count={3} height={20} style={{ marginBottom: 8 }} />
            </Box>
          ) : (
            <SofaDescription description={info?.description || ""} />
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CoffeeTableDetailDesktopContent;
