import { Box, Heading, Flex, useBreakpointValue } from "@chakra-ui/react";
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
}: Props) => {
  // Responsive icon size: smaller on mobile, larger on desktop/tablet
  const iconSize = useBreakpointValue({
    base: "28px",
    sm: "32px",
    md: "35px",
    lg: "38px",
    xl: "42px",
    "2xl": "48px",
  });

  return (
    <Box
      dir="rtl"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
    >
      {fabrics.length > 0 && (
        <Box mb={4}>
          <Heading size="md" mb={2} textAlign="right">
            انتخاب پارچه
          </Heading>
          <Flex wrap="wrap" gap={2} justify="flex-start" flexDirection="row">
            {fabrics.map((fabric) => (
              <Box
                key={fabric.id}
                w={iconSize}
                h={iconSize}
                borderRadius="full"
                bg={`#${fabric.color}`}
                border={
                  selectedFabric?.id === fabric.id
                    ? "3px solid #1976d2"
                    : "2px solid #eee"
                }
                mb={1}
                cursor="pointer"
                boxShadow={selectedFabric?.id === fabric.id ? "md" : "none"}
                onClick={() => onFabricSelect(fabric)}
                title={`${fabric.name} ${fabric.code}`}
                transition="box-shadow 0.2s, border 0.2s"
              />
            ))}
          </Flex>
        </Box>
      )}
      {frames.length > 0 && (
        <Box>
          <Heading size="md" mb={2} textAlign="right">
            انتخاب چوب
          </Heading>
          <Flex wrap="wrap" gap={2} justify="flex-start" flexDirection="row">
            {frames.map((frame) => (
              <Box
                key={frame.id}
                display="flex"
                flexDirection="column"
                alignItems="center"
                w={`calc(${iconSize} + 5px)`}
              >
                <Box
                  w={iconSize}
                  h={iconSize}
                  borderRadius="full"
                  bg={
                    frame.id === 1
                      ? "#825950"
                      : frame.id === 2
                      ? "#e1b2a6"
                      : frame.id === 3
                      ? "#8c5a55"
                      : frame.id === 4
                      ? "#232323"
                      : "#8B4513"
                  }
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
                  transition="box-shadow 0.2s, border 0.2s"
                />
                <Box fontSize="xs" mt="1px" textAlign="center">
                  {frame.name}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default SofaColorPickers;
