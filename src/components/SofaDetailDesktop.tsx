import { Box, Grid } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";

const SofaDetailDesktop = () => (
  <Box p={4}>
    <Box mb={4}>
      <Skeleton height={40} width={40} /> {/* NavBar Skeleton */}
    </Box>
    <Grid templateColumns="1fr 2fr" gap={6} alignItems="start">
      <Box order={2} width="100%">
        <Box position="relative" width="100%" paddingTop="56.25%">
          {/* 16:9 Aspect Ratio (9/16 = 0.5625, so 56.25%) */}
          <Box position="absolute" top={0} left={0} width="100%" height="100%">
            <Skeleton height="100%" width="100%" style={{ minHeight: 0 }} />
            {/* Image Slider Skeleton */}
          </Box>
        </Box>
      </Box>
      <Box order={1}>
        <Skeleton count={6} height={32} style={{ marginBottom: 8 }} />{" "}
        {/* Color Pickers Skeleton */}
      </Box>
    </Grid>
    <Box mt={6}>
      <Skeleton count={3} /> {/* Description Skeleton */}
    </Box>
  </Box>
);

export default SofaDetailDesktop;
