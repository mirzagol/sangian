import React from "react";
import {
  Box,
  Alert,
  CloseButton,
  Portal,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useContractorInquiry } from "../hooks/useContractorInquiry";

interface SubmitButtonProps {
  disabled?: boolean;
  children?: React.ReactNode;
  contractorId?: string | null;
  firstName?: string;
  lastName?: string;
  phone?: string;
  onSuccess?: () => void;
}

const ContractSubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  children,
  contractorId,
  firstName,
  lastName,
  phone,
  onSuccess,
}) => {
  const { loading, response, error, sendInquiry, setResponse, setError } =
    useContractorInquiry();

  const handleAlertClose = () => {
    setResponse(null);
    setError(null);
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError(null);

    if (!firstName || !lastName || !phone || !contractorId) {
      setError("لطفا همه فیلدها را پر کنید.");
      return;
    }

    try {
      await sendInquiry(contractorId, firstName, lastName, phone);
      // If successful, call onSuccess to reset the form
      if (onSuccess) onSuccess();
    } catch (error) {
      setError("خطا در ارسال اطلاعات.");
    }
  };

  return (
    <>
      {/* Success Alert */}
      {response?.message && (
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
                  <Alert.Title
                    fontSize="lg"
                    fontWeight="bold"
                    color="green.800"
                  >
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
      )}

      {/* Error message */}
      {error && (
        <Text color="red.500" fontSize="sm" textAlign="center" mb={2}>
          {error}
        </Text>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={disabled || loading}
        onClick={handleClick}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          background: disabled || loading ? "#b2dfdb" : "#319795",
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "inherit",
          fontSize: "1rem",
          border: "none",
          cursor: disabled || loading ? "not-allowed" : "pointer",
          marginTop: "12px",
          letterSpacing: "1px",
          direction: "rtl",
          opacity: disabled || loading ? 0.7 : 1,
        }}
      >
        {loading ? <Spinner size="sm" /> : children}
      </button>
    </>
  );
};

export default ContractSubmitButton;
