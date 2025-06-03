import { Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box
    as="footer"
    width="100%"
    bg="gray.100"
    py={4}
    px={6}
    textAlign="center"
    fontSize="sm"
    color="gray.600"
    mt="auto"
    dir="rtl" // RTL direction
  >
    <Text dir="ltr">© {new Date().getFullYear()} </Text>
    <Text>مبلمان سنگیان. همه حقوق محفوظ است.</Text>
  </Box>
);

export default Footer;
