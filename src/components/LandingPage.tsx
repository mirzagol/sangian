import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading mb={4}>به مبلمان سنگیان خوش آمدید</Heading>
      <Text mb={8}>کیفیت، زیبایی و راحتی را با ما تجربه کنید.</Text>
      <Button colorScheme="blue" size="lg" onClick={() => navigate("/catalog")}>
        مشاهده محصولات
      </Button>
    </Box>
  );
};

export default LandingPage;
