import { useState } from "react";
import {
  Alert,
  CloseButton,
  Dialog,
  Portal,
  Box,
  SimpleGrid,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useSendSelection } from "../hooks/useSendSelection";

type FurnitureType = "sofa" | "coffee_table" | "dining_table" | "cushion";

interface ItemCoverDialogProps {
  isOpen: boolean;
  onClose: () => void;
  image?: string;
  name?: string;
  frame?: string;
  fabric?: string;
  fabricCode?: number;
  id?: number;
  furnitureType: FurnitureType;
}

const ItemCoverDialog = ({
  isOpen,
  onClose,
  image,
  name,
  frame,
  fabric,
  fabricCode,
  id,
  furnitureType,
}: ItemCoverDialogProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const { sendSelection, loading, response, error, setResponse } =
    useSendSelection();

  const handleAlertClose = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setResponse(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !id) return;
    await sendSelection({
      name: `${firstName} ${lastName}`,
      cellphone: phone,
      furniture_type: furnitureType,
      furniture_id: id,
    });
  };

  if (response?.message) {
    return (
      <Portal>
        <Box
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          zIndex={1500}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="blackAlpha.300"
        >
          <Box minW={{ base: "90vw", md: "400px" }} margin={2} dir="rtl">
            <Alert.Root
              status="success"
              width="100%"
              borderRadius="xl"
              boxShadow="lg"
              bg="white"
              p={6}
              color="green.800"
            >
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title fontSize="lg" fontWeight="bold" color="green.800">
                  موفقیت‌آمیز!
                </Alert.Title>
                <Alert.Description fontSize="md" mt={2} color="gray.600">
                  {response.message}
                </Alert.Description>
              </Alert.Content>
              <CloseButton
                pos="relative"
                top="-2"
                insetEnd="-2"
                onClick={handleAlertClose}
              />
            </Alert.Root>
          </Box>
        </Box>
      </Portal>
    );
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}
      size="md"
      placement="center"
      motionPreset="slide-in-bottom"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner my={6}>
          <Dialog.Content bg="gray.50" pb={4}>
            <Dialog.Header>
              <CloseButton size="sm" onClick={onClose} />
            </Dialog.Header>
            <Dialog.Body>
              <SimpleGrid columns={1} p={2} dir="rtl">
                <Box
                  marginBottom={3}
                  borderRadius="xl"
                  boxShadow="md"
                  p={4}
                  bg="white"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap={4}
                >
                  {image && (
                    <Box
                      w="100%"
                      mb={2}
                      borderRadius="lg"
                      overflow="hidden"
                      maxW={{ base: "100%", xl: "350px" }}
                      maxH={{ base: "220px", xl: "320px" }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={image}
                        alt={name}
                        borderRadius="lg"
                        objectFit="contain"
                        width="100%"
                        height="auto"
                        maxH={{ base: "220px", xl: "320px" }}
                        minH="120px"
                      />
                    </Box>
                  )}
                  <Text fontWeight="bold" fontSize="xl" mt={2}>
                    {name}
                  </Text>
                  {(furnitureType === "sofa" ||
                    furnitureType === "coffee_table" ||
                    furnitureType === "dining_table") &&
                    frame && (
                      <Text fontSize="md" color="gray.600">
                        جنس پایه: <b>{frame}</b>
                      </Text>
                    )}
                  {(furnitureType === "sofa" || furnitureType === "cushion") &&
                    (fabric || fabricCode) && (
                      <Text fontSize="md" color="gray.600">
                        پارچه:{" "}
                        <b>
                          {fabric} {fabricCode}
                        </b>
                      </Text>
                    )}
                </Box>
                <Box
                  borderRadius="xl"
                  boxShadow="md"
                  p={6}
                  bg="white"
                  as="form"
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  onSubmit={handleSubmit}
                >
                  <Text fontWeight="bold" fontSize="lg" mb={2}>
                    اطلاعات تماس
                  </Text>
                  <Box>
                    <Text fontSize="sm" mb={1}>
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
                      }}
                      required
                    />
                  </Box>
                  <Box>
                    <Text fontSize="sm" mb={1}>
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
                      }}
                      required
                    />
                  </Box>
                  <Box>
                    <Text fontSize="sm" mb={1}>
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
                          }}
                        >
                          09*********
                        </span>
                      )}
                    </div>
                  </Box>
                  {error && (
                    <Text color="red.500" fontSize="sm" textAlign="center">
                      {error}
                    </Text>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: "#3182ce",
                      color: "white",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "none",
                      fontWeight: "bold",
                      marginTop: "8px",
                      cursor: loading ? "not-allowed" : "pointer",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? <Spinner size="sm" /> : "ارسال به فروشنده"}
                  </button>
                </Box>
              </SimpleGrid>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ItemCoverDialog;
