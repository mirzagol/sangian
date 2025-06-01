import { Box, Grid, AspectRatio } from "@chakra-ui/react";
import ItemNavBar from "./ItemNavBar";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import Skeleton from "react-loading-skeleton";
import ConfirmButton from "./ConfirmButton";
import Footer from "./Footer";
import SofaImageSlider from "./SofaImageSlider";

const CoffeeTableDetailDesktopContent = ({
  navigate,
  info,
  images,
  imagesLoading,
  frames,
  selectedFrame,
  setSelectedFrame,
}: any) => (
  <Box display="flex" flexDirection="column" minHeight="100vh" bg="gray.50">
    <Box flex="1">
      <Box paddingX={4}>
        <ItemNavBar onBack={() => navigate("/catalog")} />
        <Grid templateColumns="1fr 2fr" gap={6} alignItems="start">
          <Box order={2} borderRadius="2xl">
            {imagesLoading ? (
              <AspectRatio ratio={16 / 9}>
                <Skeleton height="100%" />
              </AspectRatio>
            ) : (
              <SofaImageSlider images={images} name={info.name} />
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
            <Box
              fontWeight="bold"
              fontSize="2xl"
              mb={2}
              mt={3}
              textAlign="center"
              letterSpacing="wide"
            >
              {info.name}
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
              <ConfirmButton />
            </Box>
          </Box>
        </Grid>
        <SofaDescription description={info.description} />
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default CoffeeTableDetailDesktopContent;
