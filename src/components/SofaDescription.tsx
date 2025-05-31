import { Box, Heading, Text } from "@chakra-ui/react";

const SofaDescription = ({ description }: { description?: string }) => (
  <Box mt={10} px={2} py={0}>
    <Heading size="md" color="blue.900" mb={2} textAlign="right">
      توضیحات
    </Heading>
    <Text textAlign="right" fontSize="md">
      {description || "توضیحی برای این مبل ثبت نشده است."}
    </Text>
  </Box>
);

export default SofaDescription;
