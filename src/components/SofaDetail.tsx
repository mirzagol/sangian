import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { AspectRatio, Box, Grid } from "@chakra-ui/react";
import SofaNavBar from "./SofaNavBar";
import SofaImageSlider from "./SofaImageSlider";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import useSofaOptions, { Frame, Fabric } from "../hooks/useSofaOptions";
import useSofaImages from "../hooks/useSofaImages";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SofaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Get all available frames/fabrics for this model
  const { frames, fabrics, isLoading: optionsLoading } = useSofaOptions(id);

  // State for selected frame/fabric
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);

  // Fetch images/info for the selected combo
  const {
    images,
    info,
    isLoading: imagesLoading,
  } = useSofaImages(id, selectedFrame?.id, selectedFabric?.id);

  // Track if it's the first load
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!optionsLoading && !imagesLoading && info) {
      isFirstLoad.current = false;
    }
  }, [optionsLoading, imagesLoading, info]);

  // Set default selection when options load
  useEffect(() => {
    if (frames.length && fabrics.length) {
      setSelectedFrame((prev) => prev || frames[0]);
      setSelectedFabric((prev) => prev || fabrics[0]);
    }
  }, [frames, fabrics]);

  // Show full skeleton on first load
  if ((optionsLoading || imagesLoading || !info) && isFirstLoad.current) {
    return (
      <Box p={4}>
        <Box mb={4}>
          <Skeleton height={40} width={200} /> {/* NavBar Skeleton */}
        </Box>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
          gap={6}
          alignItems="start"
        >
          <Box order={{ base: 1, lg: 2 }}>
            <Skeleton height={400} /> {/* Image Slider Skeleton */}
          </Box>
          <Box order={{ base: 2, lg: 1 }}>
            <Skeleton count={6} height={32} style={{ marginBottom: 8 }} />{" "}
            {/* Color Pickers Skeleton */}
          </Box>
        </Grid>
        <Box mt={6}>
          <Skeleton count={3} /> {/* Description Skeleton */}
        </Box>
      </Box>
    );
  }

  // Show only image skeleton when changing colors
  return (
    <Box p={4}>
      <SofaNavBar onBack={() => navigate("/")} name={info?.model_name || ""} />
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
        gap={6}
        alignItems="start"
      >
        <Box order={{ base: 1, lg: 2 }}>
          {imagesLoading ? (
            <AspectRatio ratio={16 / 9}>
              <Skeleton height="100%" />
            </AspectRatio>
          ) : (
            info && <SofaImageSlider images={images} name={info.model_name} />
          )}
        </Box>
        <Box order={{ base: 2, lg: 1 }} height="100%">
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
};

export default SofaDetail;
