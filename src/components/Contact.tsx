import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  Flex,
  HStack,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si"; // Add this line
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Footer from "./Footer";
import baladLogo from "../assets/icons/balad.png";
import neshanLogo from "../assets/icons/neshan.png";

const Contact = () => {
  const cardBg = "white";
  const iconBg = "gray.100";
  const navigate = useNavigate();

  return (
    <>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg="radial-gradient(circle at 70% 10%, #e0f7fa 0%, transparent 60%), radial-gradient(circle at 20% 80%, #ffe0f0 0%, transparent 70%), #f5f6fa"
      >
        <Box
          maxW={"2xl"}
          mx="auto"
          width="100%"
          px={4}
          mb={10}
          mt={10}
          ml={4}
          mr={4}
          p={{ base: 4, md: 8 }}
          borderRadius="2xl"
          boxShadow="2xl"
          bg={cardBg}
          dir="rtl"
          position="relative"
          overflow="hidden"
        >
          {/* Decorative background circles */}
          <Box
            position="absolute"
            top="-60px"
            left="-60px"
            w="120px"
            h="120px"
            bg="teal.100"
            borderRadius="full"
            opacity={0.2}
            zIndex={0}
          />
          <Box
            position="absolute"
            bottom="-40px"
            right="-40px"
            w="80px"
            h="80px"
            bg="pink.100"
            borderRadius="full"
            opacity={0.15}
            zIndex={0}
          />

          <Box position="relative" zIndex={1}>
            {/* Back Button */}

            <Flex mb={2} position="relative" align="center" justify="center">
              <Heading
                fontSize="2xl"
                textAlign="center"
                color="teal.700"
                flex="1"
              >
                تماس با ما
              </Heading>
              <Icon
                as={IoMdArrowBack}
                boxSize={7}
                color="teal.700"
                cursor="pointer"
                position="absolute"
                left={2}
                top="50%"
                transform="translateY(-50%)"
                onClick={() => navigate(-1)}
              />
            </Flex>

            <Box
              my={4}
              height="2px"
              bg="teal.100"
              width="100%"
              borderRadius="full"
            />

            {/* About Us Section */}
            <Box
              mb={6}
              textAlign="justify"
              color="gray.700"
              fontSize="sm"
              lineHeight="2"
            >
              <Text
                fontWeight="bold"
                fontSize="lg"
                mb={1}
                color="gray.800"
                textAlign="center"
              >
                مبلمان اوهر
              </Text>
              <Text fontSize="sm" color="gray.500" textAlign="center" mb={2}>
                مبلمان، فضایی سرشار از خاطره و قلبی سرشار از عشق را پر خواهد
                کرد.
              </Text>
              <Text>
                صنایع چوب سنگیان با بیش از نیم قرن تجربه در تولید و توزیع مبلمان
                و تخت خواب مدرن، از سال ۲۰۱۲ تصمیم به ارتقاء کیفیت و کمیت
                محصولات خود با برند "اوهر" جهت حضور در بازارهای بین‌المللی گرفت.
              </Text>
              <Text mt={2}>
                در این راستا، استفاده از مشاوران، مدیران و پرسنل ایرانی و
                بین‌المللی و همچنین بهره‌گیری از ماشین‌آلات تمام اتوماتیک در
                دستور کار قرار گرفت تا محصولات به بازار جهانی عرضه شوند.
              </Text>
              <Text mt={2}>نقطه عطف این مسیر در سال ۲۰۱۳ رقم خورد.</Text>
              <Text mt={2}>
                این مجموعه موفق شد جایگاه نخست مبلمان مدرن را کسب کند و تندیس
                طلایی جایزه ملی فروشگاه مبلمان و دکوراسیون را به دست آورد.
              </Text>
              <Text mt={2}>
                این موفقیت مسئولیت ما را دوچندان کرد. اکنون این مجموعه با داشتن
                ۳۰ نمایندگی فعال در سراسر ایران، توانسته است با محصولات خارجی
                نیز رقابت کند.
              </Text>
            </Box>

            <Stack p={4} fontSize="md">
              <Flex align="center" gap={3} bg={iconBg} p={3} borderRadius="lg">
                <Box
                  bg="red.100"
                  borderRadius="full"
                  p={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaMapMarkerAlt} color="red.400" boxSize={5} />
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.700">
                    آدرس:
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    یافت آباد، مجتمع تجاری کلاسیک، طبقه زیر همکف
                  </Text>
                  <HStack p={2}>
                    <Link
                      href="https://balad.ir/p/5MSsBkqCWzBgQ4"
                      target="_blank"
                      rel="noopener"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={baladLogo}
                        alt="Balad"
                        style={{ width: 30, height: 30 }}
                      />
                    </Link>

                    <Link
                      href="https://maps.app.goo.gl/phhvfnpv9hRVZwZJ6"
                      target="_blank"
                      rel="noopener"
                      style={{ textDecoration: "none" }}
                    >
                      <Icon as={SiGooglemaps} color="teal.400" boxSize={7} />
                    </Link>

                    <Link
                      href="https://neshan.org/maps/places/81818536fc73c4bcd3a339134c6c6bdf#c35.661-51.349-16z-0p"
                      target="_blank"
                      rel="noopener"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={neshanLogo}
                        alt="Neshan"
                        style={{ width: 30, height: 30 }}
                      />
                    </Link>
                  </HStack>
                </Box>
              </Flex>
              <Flex align="center" gap={3} bg={iconBg} p={3} borderRadius="lg">
                <Box
                  bg="blue.100"
                  borderRadius="full"
                  p={2}
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={FaPhoneAlt} color="blue.400" boxSize={5} />
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.700">
                    تلفن:
                  </Text>
                  <Stack direction="row" p={2} mt={1}>
                    <Link
                      href="tel:02166234095"
                      color="gray.600"
                      fontWeight="bold"
                      dir="ltr"
                    >
                      02166234095
                    </Link>
                    <Text color="gray.400">|</Text>
                    <Link
                      href="tel:09112581858"
                      color="gray.600"
                      fontWeight="bold"
                      dir="ltr"
                    >
                      09112581858
                    </Link>
                  </Stack>
                </Box>
              </Flex>
              <Flex align="center" gap={3} bg={iconBg} p={3} borderRadius="lg">
                <Box
                  bg="green.100"
                  borderRadius="full"
                  p={2}
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={FaWhatsapp} color="green.500" boxSize={5} />
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.700">
                    واتساپ:
                  </Text>
                  <Link
                    href="https://wa.me/989304442972"
                    color="gray.600"
                    fontWeight="bold"
                    dir="ltr"
                    fontSize="sm"
                  >
                    09304442972
                  </Link>
                </Box>
              </Flex>
              <Flex align="center" gap={3} bg={iconBg} p={3} borderRadius="lg">
                <Box
                  bg="pink.100"
                  borderRadius="full"
                  p={2}
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={FaInstagram} color="pink.500" boxSize={5} />
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.700">
                    اینستاگرام:
                  </Text>
                  <Link
                    href="https://instagram.com/sangianfurniture"
                    color="gray.600"
                    fontWeight="bold"
                    dir="ltr"
                    fontSize="sm"
                  >
                    sangianfurniture
                  </Link>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Contact;
