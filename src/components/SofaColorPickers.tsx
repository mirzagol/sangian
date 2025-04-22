import { Box, Heading, Flex } from "@chakra-ui/react";

const fabricColors = [
  "#D2B48C",
  "#F5DEB3",
  "#E5C298",
  "#F3E2C7",
  "#C2B280",
  "#BDB76B",
  "#556B2F",
  "#CD853F",
];
const frameColors = ["#8B4513", "#A0522D", "#654321"];

const SofaColorPickers = () => (
  <Box
    dir="rtl"
    height="100%"
    display="flex"
    flexDirection="column"
    justifyContent="flex-end"
  >
    <Box>
      <Heading size="lg" mb={2} textAlign="right">
        انتخاب پارچه
      </Heading>
      <Flex
        wrap="wrap"
        gap={2}
        justify="flex-end"
        flexDirection="row-reverse"
        mb={0}
      >
        {fabricColors.map((color) => (
          <Box
            key={color}
            w="50px"
            h="50px"
            borderRadius="full"
            bg={color}
            border="2px solid #eee"
            mb={1}
          />
        ))}
      </Flex>
    </Box>
    <Box mt={4}>
      <Heading size="lg" mb={2} textAlign="right">
        انتخاب چوب
      </Heading>
      <Flex wrap="wrap" gap={2} justify="flex-end" flexDirection="row-reverse">
        {frameColors.map((color) => (
          <Box
            key={color}
            w="50px"
            h="50px"
            borderRadius="full"
            bg={color}
            border="2px solid #eee"
            mb={1}
          />
        ))}
      </Flex>
    </Box>
  </Box>
);

export default SofaColorPickers;
