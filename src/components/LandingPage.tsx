import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import LandingCategories from "./LandingCategories";
import bgImage from "../assets/BG.jpg";
import Footer from "./Footer";

const glassBoxStyle = {
  bg: "rgba(255,255,255,0.35)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(8px)",
  borderRadius: "2xl",
  border: "1px solid rgba(255,255,255,0.18)",
};

const LandingPage = () => {
  const categoriesRef = useRef<HTMLDivElement>(null);

  const handleScrollToCategories = () => {
    if (categoriesRef.current) {
      const y =
        categoriesRef.current.getBoundingClientRect().top + window.scrollY;
      // Offset for a bit of spacing, adjust as needed (e.g. -32 for 2rem)
      window.scrollTo({
        top: y - 32,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      minH="100dvh"
      bg="radial-gradient(circle at 70% 10%, #e0f7fa 0%, transparent 60%), radial-gradient(circle at 20% 80%, #ffe0f0 0%, transparent 70%), #f5f6fa"
      dir="rtl"
      display="flex"
      flexDirection="column"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative blurred circles */}
      <Box
        position="absolute"
        top={{ base: "-80px", md: "-120px" }}
        left={{ base: "-80px", md: "-120px" }}
        w={{ base: "180px", md: "260px" }}
        h={{ base: "180px", md: "260px" }}
        bg="teal.100"
        borderRadius="full"
        filter="blur(60px)"
        opacity={0.4}
        zIndex={0}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom={{ base: "-60px", md: "-100px" }}
        right={{ base: "-60px", md: "-100px" }}
        w={{ base: "140px", md: "200px" }}
        h={{ base: "140px", md: "200px" }}
        bg="pink.100"
        borderRadius="full"
        filter="blur(60px)"
        opacity={0.3}
        zIndex={0}
        pointerEvents="none"
      />

      {/* Main content */}
      <Box flex="1" display="flex" flexDirection="column">
        {/* Hero Section */}
        <Box
          position="relative"
          w="100%"
          minH="100vh"
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-end" }} // Center on mobile, right on desktop
          overflow="hidden"
          mb={0}
          dir="rtl"
        >
          <Image
            src={bgImage}
            alt="مبلمان سنگیان"
            objectFit="cover"
            objectPosition="left"
            w="100%"
            h="100%"
            position="absolute"
            top={0}
            left={0}
            zIndex={0}
            filter="brightness(0.85)"
          />
          <Flex
            direction="column"
            align={{ base: "center", md: "flex-end" }} // Center on mobile, right on desktop
            justify="flex-end" // Place at bottom
            position="relative"
            zIndex={1}
            w="full"
            h="full"
            px={{ base: 2, md: 24 }}
            dir="rtl"
          >
            <Box
              {...glassBoxStyle}
              p={{ base: 4, md: 8 }}
              maxW={{ base: "95%", md: "480px" }}
              mb={{ base: 10, md: 12 }}
              dir="rtl"
              mx={{ base: "auto", md: 0 }} // Center horizontally on mobile
            >
              <Heading
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                color="teal.800"
                mb={2}
                letterSpacing="wide"
                textAlign="right"
              >
                سادگی. زیبایی.
              </Heading>
              <Text
                fontSize={{ base: "md", md: "xl" }}
                color="gray.700"
                mb={6}
                fontWeight="medium"
                textAlign="right"
              >
                مبلمان سنگیان، ترکیبی از طراحی مدرن و کیفیت ممتاز برای خانه شما.
              </Text>
              <Button
                colorScheme="teal"
                size="lg"
                px={10}
                fontWeight="bold"
                variant="solid"
                onClick={handleScrollToCategories}
                borderRadius="xl"
                boxShadow="md"
              >
                مشاهده محصولات
              </Button>
            </Box>
          </Flex>
        </Box>

        {/* Categories Section */}
        <Box
          marginTop={20}
          ref={categoriesRef}
          maxW="2xl"
          mx="auto"
          width="100%"
          px={4}
          mb={10}
          dir="rtl"
        >
          <Box
            {...glassBoxStyle}
            p={{ base: 4, md: 8 }}
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="stretch"
          >
            <Heading fontSize="xl" color="teal.700" mb={4} textAlign="right">
              دسته‌بندی محصولات
            </Heading>
            <LandingCategories />
          </Box>
        </Box>

        {/* Contact & Contract Section as a single glassy info bar */}
        <Box maxW="2xl" mx="auto" width="100%" px={4} mb={12} dir="rtl">
          <Box
            {...glassBoxStyle}
            p={{ base: 4, md: 8 }}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "stretch", md: "center" }}
            justifyContent="space-between"
            gap={6}
          >
            <Box flex="1" textAlign="right">
              <Heading fontSize="lg" color="teal.700" mb={1} textAlign="right">
                تماس با ما و طرفین قرارداد
              </Heading>
              <Text color="gray.600" fontSize="md" mb={2} textAlign="right">
                برای دریافت مشاوره، اطلاعات تماس یا مشاهده شرایط قرارداد، از
                گزینه‌های زیر استفاده کنید.
              </Text>
            </Box>
            <Box
              display="flex"
              gap={3}
              flexShrink={0}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Button
                colorScheme="teal"
                variant="solid"
                borderRadius="xl"
                onClick={() => (window.location.href = "/contact")}
                width={{ base: "100%", sm: "auto" }}
              >
                اطلاعات تماس
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                borderRadius="xl"
                onClick={() => (window.location.href = "/contract")}
                width={{ base: "100%", sm: "auto" }}
              >
                مشاهده قرارداد
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default LandingPage;
