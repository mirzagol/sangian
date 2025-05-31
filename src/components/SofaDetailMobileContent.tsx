import { Box, Grid, AspectRatio } from "@chakra-ui/react";
import SofaNavBar from "./SofaNavBar";
import SofaImageSlider from "./SofaImageSlider";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import Skeleton from "react-loading-skeleton";

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
}: any) => (
  <Box bg="gray.50">
    <SofaNavBar onBack={() => navigate("/")} name={info?.model_name || ""} />
    <Grid templateColumns="1fr" gap={6} alignItems="start">
      <Box order={1} borderRadius={"0 0 200px 200px"}>
        {imagesLoading ? (
          <AspectRatio ratio={16 / 9}>
            <Skeleton height="100%" />
          </AspectRatio>
        ) : (
          info && <SofaImageSlider images={images} name={info.model_name} />
        )}
      </Box>
      <Box order={2} height="100%">
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

export default SofaDetailMobileContent;
