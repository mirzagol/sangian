import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useSofas from "../hooks/useSofas";
import { Box, Spinner, Grid } from "@chakra-ui/react";
import SofaNavBar from "./SofaNavBar";
import SofaImageSlider from "./SofaImageSlider";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";

interface SofaDetailModel {
  id: number;
  name: string;
  description?: string;
  images?: string[];
}

const SofaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { sofas, isLoading } = useSofas();
  const [sofa, setSofa] = useState<SofaDetailModel | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    if (sofas.length > 0 && id) {
      const found = sofas.find((s: any) => s.id === Number(id));
      if (found) {
        setSofa(found as SofaDetailModel);
      }
    }
  }, [sofas, id]);

  if (isLoading || !sofa) return <Spinner />;

  return (
    <Box p={4}>
      <SofaNavBar onBack={() => navigate("/")} name={sofa.name} />
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 2fr" }} // 2 columns on desktop, 1 on mobile
        gap={6}
        alignItems="start"
      >
        {/* On desktop: left = color pickers, right = image slider */}
        {/* On mobile: image slider on top, color pickers below */}
        <Box order={{ base: 1, lg: 2 }}>
          <SofaImageSlider images={sofa.images || []} name={sofa.name} />
        </Box>
        <Box order={{ base: 2, lg: 1 }}>
          <SofaColorPickers />
        </Box>
      </Grid>
      <SofaDescription description={sofa.description} />
    </Box>
  );
};

export default SofaDetail;
