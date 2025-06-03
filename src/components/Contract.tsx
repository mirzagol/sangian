import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
  Icon,
} from "@chakra-ui/react";
import { useContractors } from "../hooks/useContractors"; // <-- use the hook from hooks
import { useState } from "react";
import ContractSubmitButton from "./ContractSubmitButton";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Contract = () => {
  const cardBg = "white";
  const { contractors, loading } = useContractors();
  const navigate = useNavigate();

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedContractor, setSelectedContractor] = useState<string | null>(
    null
  );
  const [comboKey, setComboKey] = useState(0);

  // Reset all fields
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setSelectedContractor(null);
    // Optionally, also reset combobox filter if needed
    filter("");
    setComboKey((k) => k + 1); // Force Combobox reset
  };

  // Prepare combobox data
  const contractorOptions = contractors.map((c) => ({
    label: c.name,
    value: String(c.id),
  }));

  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: contractorOptions,
    filter: contains,
  });

  return (
    <>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg="radial-gradient(circle at 70% 10%, #e0f7fa 0%, transparent 60%), radial-gradient(circle at 20% 80%, #ffe0f0 0%, transparent 70%), #f5f6fa"
        dir="rtl"
        fontFamily="inherit"
      >
        <Box
          maxW="2xl"
          mx="auto"
          width="100%"
          px={4}
          ml={4}
          mr={4}
          mb={10}
          mt={10}
          p={{ base: 4, md: 8 }}
          borderRadius="2xl"
          boxShadow="2xl"
          bg={cardBg}
          dir="rtl"
          position="relative"
          overflow="hidden"
          fontFamily="inherit"
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
          <Flex mb={2} position="relative" align="center" justify="center">
            <Heading
              fontSize="2xl"
              textAlign="center"
              color="teal.700"
              flex="1"
            >
              اطلاع از شرایط قرارداد
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

          <Box position="relative" zIndex={1} dir="rtl" fontFamily="inherit">
            <Box
              my={4}
              height="2px"
              bg="teal.100"
              width="100%"
              borderRadius="full"
            />

            {/* Name, Lastname, Phone fields and Combobox in the form */}
            <Box
              borderRadius="xl"
              boxShadow="md"
              p={6}
              bg="white"
              as="form"
              display="flex"
              flexDirection="column"
              gap={4}
              my={4}
              fontFamily="inherit"
              dir="rtl"
            >
              <Box>
                <Text
                  fontSize="sm"
                  mb={1}
                  fontFamily="inherit"
                  dir="rtl"
                  textAlign="right"
                >
                  نام
                </Text>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    outline: "none",
                    marginBottom: "8px",
                    fontFamily: "inherit",
                    direction: "rtl",
                    textAlign: "right",
                  }}
                  required
                />
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  mb={1}
                  fontFamily="inherit"
                  dir="rtl"
                  textAlign="right"
                >
                  نام خانوادگی
                </Text>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    outline: "none",
                    marginBottom: "8px",
                    fontFamily: "inherit",
                    direction: "rtl",
                    textAlign: "right",
                  }}
                  required
                />
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  mb={1}
                  fontFamily="inherit"
                  dir="rtl"
                  textAlign="right"
                >
                  شماره تماس
                </Text>
                <div style={{ position: "relative" }}>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=""
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      outline: "none",
                      marginBottom: "8px",
                      color: "#222",
                      background: "transparent",
                      fontFamily: "inherit",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                    required
                    pattern="^09\d{9}$"
                    inputMode="numeric"
                    maxLength={11}
                  />
                  {phone === "" && (
                    <span
                      style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#a0aec0",
                        pointerEvents: "none",
                        fontSize: "0.95em",
                        opacity: 0.7,
                        direction: "ltr",
                        fontFamily: "inherit",
                      }}
                    >
                      09*********
                    </span>
                  )}
                </div>
              </Box>
              {/* Combobox for contractors */}
              {loading ? (
                <Box
                  width="100%"
                  textAlign="center"
                  color="teal.600"
                  py={6}
                  fontWeight="bold"
                  fontFamily="inherit"
                  dir="rtl"
                >
                  در حال بارگذاری...
                </Box>
              ) : (
                <Combobox.Root
                  key={comboKey} // <-- Add this line
                  collection={collection}
                  onInputValueChange={(e) => filter(e.inputValue)}
                  onOpenChange={(open) => {
                    if (open) filter("");
                  }}
                  onValueChange={(e) => {
                    if (Array.isArray(e?.value)) {
                      setSelectedContractor(e.value[0] ?? null);
                    } else {
                      setSelectedContractor(e?.value ?? null);
                    }
                  }}
                  width="100%"
                  dir="rtl"
                >
                  <Combobox.Label>
                    <Text fontFamily="inherit" fontSize="md" mb={2} dir="rtl">
                      طرف قرارداد
                    </Text>
                  </Combobox.Label>
                  <Combobox.Control>
                    <Combobox.Input
                      placeholder="جستجو..."
                      style={{
                        fontFamily: "inherit",
                        direction: "rtl",
                        textAlign: "right",
                        paddingRight: "3.5rem",
                      }}
                    />
                    <Combobox.IndicatorGroup>
                      <Combobox.ClearTrigger />
                      <Combobox.Trigger />
                    </Combobox.IndicatorGroup>
                  </Combobox.Control>
                  <Portal>
                    <Combobox.Positioner>
                      <Combobox.Content>
                        {collection.items.length === 0 ? (
                          <Combobox.Empty>
                            <Text fontFamily="inherit" dir="rtl">
                              موردی یافت نشد
                            </Text>
                          </Combobox.Empty>
                        ) : (
                          collection.items.map((item) => (
                            <Combobox.Item
                              item={item}
                              key={item.value}
                              style={{
                                fontFamily: "inherit",
                                direction: "rtl",
                                textAlign: "right",
                              }}
                            >
                              {item.label}
                              <Combobox.ItemIndicator />
                            </Combobox.Item>
                          ))
                        )}
                      </Combobox.Content>
                    </Combobox.Positioner>
                  </Portal>
                </Combobox.Root>
              )}
              {/* ثبت button */}
              <ContractSubmitButton
                disabled={!selectedContractor}
                contractorId={selectedContractor}
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                onSuccess={resetForm} // Pass the reset function
              >
                ثبت
              </ContractSubmitButton>
            </Box>
            {/* Contract content */}
          </Box>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Contract;
