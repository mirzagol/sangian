import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Spinner, Grid } from "@chakra-ui/react";
import SofaNavBar from "./SofaNavBar";
import SofaImageSlider from "./SofaImageSlider";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import useSofaOptions, { Frame, Fabric } from "../hooks/useSofaOptions";
import useSofaImages from "../hooks/useSofaImages";

const SofaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Get all available frames/fabrics for this model
  const { frames, fabrics, isLoading: optionsLoading } = useSofaOptions(id);

  // State for selected frame/fabric
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);

  // Set default selection when options load
  useEffect(() => {
    if (frames.length && fabrics.length) {
      setSelectedFrame((prev) => prev || frames[0]);
      setSelectedFabric((prev) => prev || fabrics[0]);
    }
  }, [frames, fabrics]);

  // Fetch images/info for the selected combo
  const {
    images,
    info,
    isLoading: imagesLoading,
  } = useSofaImages(id, selectedFrame?.id, selectedFabric?.id);

  if (optionsLoading || imagesLoading || !info) return <Spinner />;

  return (
    <Box p={4}>
      <SofaNavBar onBack={() => navigate("/")} name={info.model_name} />
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
        gap={6}
        alignItems="start"
      >
        <Box order={{ base: 1, lg: 2 }}>
          <SofaImageSlider images={images} name={info.model_name} />
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
      <SofaDescription description={info.description} />
    </Box>
  );
};

export default SofaDetail;
