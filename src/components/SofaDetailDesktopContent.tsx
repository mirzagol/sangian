import { Box, Grid, AspectRatio } from "@chakra-ui/react";
import SofaNavBar from "./SofaNavBar";
import SofaImageSlider from "./SofaImageSlider";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import Skeleton from "react-loading-skeleton";

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
  <Box p={4}>
    <SofaNavBar onBack={() => navigate("/")} name={info?.model_name || ""} />
    <Grid templateColumns="1fr 2fr" gap={6} alignItems="start">
      <Box order={2}>
        {imagesLoading ? (
          <AspectRatio ratio={16 / 9}>
            <Skeleton height="100%" />
          </AspectRatio>
        ) : (
          info && <SofaImageSlider images={images} name={info.model_name} />
        )}
      </Box>
      <Box order={1} height="100%">
        <SofaColorPickers
          frames={frames}
          fabrics={fabrics}
          selectedFrame={selectedFrame}
          selectedFabric={selectedFabric}
          onFrameSelect={setSelectedFrame}
          onFabricSelect={setSelectedFabric}
        />
      </Box>
    </Grid>
    <SofaDescription description={info?.description || ""} />
  </Box>
);

export default SofaDetailDesktopContent;
