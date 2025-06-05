import { Box, Grid } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";

const SofaDetailMobile = () => (
  <Box p={4}>
    <Box mb={4}>
      <Skeleton height={40} width={40} /> {/* NavBar Skeleton */}
    </Box>
    <Grid templateColumns="1fr" gap={6} alignItems="start">
      <Box order={1} position="relative" width="100%" paddingTop="56.25%">
        <Box position="absolute" top={0} left={0} width="100%" height="100%">
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
);

export default SofaDetailMobile;
