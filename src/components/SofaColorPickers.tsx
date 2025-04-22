import { Box, Heading, Flex } from "@chakra-ui/react";
import { Frame, Fabric } from "../hooks/useSofaOptions";

interface Props {
  frames: Frame[];
  fabrics: Fabric[];
  selectedFrame: Frame | null;
  selectedFabric: Fabric | null;
  onFrameSelect: (frame: Frame) => void;
  onFabricSelect: (fabric: Fabric) => void;
}

const SofaColorPickers = ({
  frames,
  fabrics,
  selectedFrame,
  selectedFabric,
  onFrameSelect,
  onFabricSelect,
}: Props) => (
  <Box
    dir="rtl"
    height="100%"
    display="flex"
    flexDirection="column"
    justifyContent="flex-end"
  >
    <Box mb={4}>
      <Heading size="md" mb={2} textAlign="right">
        انتخاب پارچه
      </Heading>
      <Flex wrap="wrap" gap={2} justify="flex-end" flexDirection="row-reverse">
        {fabrics.map((fabric) => (
          <Box
            key={fabric.id}
            w="50px"
            h="50px"
            borderRadius="full"
            bg={fabric.color}
            border={
              selectedFabric?.id === fabric.id
                ? "3px solid #1976d2"
                : "2px solid #eee"
            }
            mb={1}
            cursor="pointer"
            boxShadow={selectedFabric?.id === fabric.id ? "md" : "none"}
            onClick={() => onFabricSelect(fabric)}
            title={fabric.name}
          />
        ))}
      </Flex>
    </Box>
    <Box>
      <Heading size="md" mb={2} textAlign="right">
        انتخاب چوب
      </Heading>
      <Flex wrap="wrap" gap={2} justify="flex-end" flexDirection="row-reverse">
        {frames.map((frame) => (
          <Box
            key={frame.id}
            w="50px"
            h="50px"
            borderRadius="full"
            bg="#8B4513"
            border={
              selectedFrame?.id === frame.id
                ? "3px solid #1976d2"
                : "2px solid #eee"
            }
            mb={1}
            cursor="pointer"
            boxShadow={selectedFrame?.id === frame.id ? "md" : "none"}
            onClick={() => onFrameSelect(frame)}
            title={frame.name}
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize="sm"
          >
            {frame.name}
          </Box>
        ))}
      </Flex>
    </Box>
  </Box>
);

export default SofaColorPickers;
