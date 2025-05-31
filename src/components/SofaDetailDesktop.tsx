import { Box, Grid } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";

const SofaDetailDesktop = () => (
  <Box p={4}>
    <Box mb={4}>
      <Skeleton height={40} width={200} /> {/* NavBar Skeleton */}
    </Box>
    <Grid templateColumns="1fr 2fr" gap={6} alignItems="start">
      <Box order={2}>
        <Skeleton height={400} /> {/* Image Slider Skeleton */}
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
