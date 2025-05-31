import { Box, Grid, AspectRatio } from "@chakra-ui/react";
import SofaNavBar from "./SofaNavBar";
import SofaImageSlider from "./SofaImageSlider";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import Skeleton from "react-loading-skeleton";
import ConfirmButton from "./ConfirmButton";
import Footer from "./Footer";

const SofaDetailDesktopContent = ({
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
}: any) => (
  <Box display="flex" flexDirection="column" minHeight="100vh" bg="gray.50">
    <Box flex="1">
      <Box paddingX={4}>
        <SofaNavBar onBack={() => navigate("/")} />
        <Grid templateColumns="1fr 2fr" gap={6} alignItems="start">
          <Box order={2} borderRadius="2xl">
            {imagesLoading ? (
              <AspectRatio ratio={16 / 9}>
                <Skeleton height="100%" />
              </AspectRatio>
            ) : (
              info && <SofaImageSlider images={images} name={info.model_name} />
            )}
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
            {/* Sofa name at the top of the colors box */}
            <Box
              fontWeight="bold"
              fontSize="2xl"
              mb={2}
              mt={3}
              textAlign="center"
              letterSpacing="wide"
            >
              {info?.model_name}
            </Box>
            <Box my={3}>
              <Box borderBottom="1px solid #e2e8f0" mb={4} />
              <SofaColorPickers
                frames={frames}
                fabrics={fabrics}
                selectedFrame={selectedFrame}
                selectedFabric={selectedFabric}
                onFrameSelect={setSelectedFrame}
                onFabricSelect={setSelectedFabric}
              />
            </Box>
            <Box mt="auto">
              <ConfirmButton />
            </Box>
          </Box>
        </Grid>
        <SofaDescription description={info?.description || ""} />
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default SofaDetailDesktopContent;
