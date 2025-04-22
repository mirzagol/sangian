import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useSofas, { Sofa } from "../hooks/useSofas";
import { Box, Heading, Text, Spinner } from "@chakra-ui/react";

const SofaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { sofas, isLoading } = useSofas();
  const [sofa, setSofa] = useState<Sofa | undefined>();

  useEffect(() => {
    if (sofas.length > 0 && id) {
      setSofa(sofas.find((s) => s.id === Number(id)));
    }
  }, [sofas, id]);

  if (isLoading || !sofa) return <Spinner />;

  return (
    <Box p={6}>
      <Heading mb={4}>{sofa.name}</Heading>
      <Text>ID: {sofa.id}</Text>
    </Box>
  );
};

export default SofaDetail;
