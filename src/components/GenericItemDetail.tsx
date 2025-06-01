import { Box, AspectRatio } from "@chakra-ui/react";
import SofaColorPickers from "./SofaColorPickers";
import SofaDescription from "./SofaDescription";
import Skeleton from "react-loading-skeleton";
import Footer from "./Footer";
import ConfirmButton from "./ConfirmButton";
import ItemNavBar from "./ItemNavBar";
import ImageWithFallback from "./ImageWithFallback";

interface Frame {
  id: number;
  name: string;
}
interface Fabric {
  id: number;
  name: string;
  code: string;
  color: string;
}

interface Props {
  navigate: (path: string) => void;
  info: { name: string; description: string; image_path: string };
  images: string[];
  imagesLoading: boolean;
  frames?: Frame[];
  fabrics?: Fabric[];
  selectedFrame?: Frame | null;
  selectedFabric?: Fabric | null;
  setSelectedFrame?: (frame: Frame) => void;
  setSelectedFabric?: (fabric: Fabric) => void;
  showFramePicker?: boolean;
  showFabricPicker?: boolean;
  backUrl: string;
}

const GenericItemDetail = ({
  navigate,
  info,
  images,
  imagesLoading,
  frames = [],
  fabrics = [],
  selectedFrame,
  selectedFabric,
  setSelectedFrame,
  setSelectedFabric,
  showFramePicker,
  showFabricPicker,
  backUrl,
}: Props) => {
  return (
    <Box bg="gray.50" minH="100vh" display="flex" flexDirection="column">
      <Box>
        <ItemNavBar onBack={() => navigate(backUrl)} />
      </Box>
      <Box p={4}>
        <AspectRatio ratio={16 / 9} width="100%">
          {imagesLoading ? (
            <Skeleton height="100%" />
          ) : (
            <ImageWithFallback
              src={images[0] || info.image_path}
              alt={info.name}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          )}
        </AspectRatio>
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="md"
          mt={-8}
          p={5}
          zIndex={3}
          width="100%"
          margin="0 auto"
          display="flex"
          flexDirection="column"
          gap={4}
        >
          <Box textAlign="center" fontSize="2xl" fontWeight="bold" mb={2}>
            {info.name}
          </Box>
          {(showFramePicker || showFabricPicker) && (
            <SofaColorPickers
              frames={showFramePicker ? frames : []}
              fabrics={showFabricPicker ? fabrics : []}
              selectedFrame={selectedFrame || null}
              selectedFabric={selectedFabric || null}
              onFrameSelect={setSelectedFrame || (() => {})}
              onFabricSelect={setSelectedFabric || (() => {})}
            />
          )}
          <SofaDescription description={info.description} />
          <ConfirmButton />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default GenericItemDetail;
