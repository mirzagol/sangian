import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import useCushions from "../hooks/useCushions";
import CushionDetailMobileContent from "./CushionDetailMobileContent";
import CushionDetailDesktopContent from "./CushionDetailDesktopContent";

const CushionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "cushion";
  const { cushions } = useCushions();
  const [selectedFabric, setSelectedFabric] = useState<any>(null);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const cushion = cushions.find((c) => String(c.id) === id);

  useEffect(() => {
    if (cushion)
      setSelectedFabric({ id: 1, name: "پارچه", code: "", color: "#eee" });
  }, [cushion]);

  if (!cushion) return null;

  const images = [cushion.image_path];

  if (isMobile) {
    return (
      <CushionDetailMobileContent
        navigate={() => navigate(`/catalog?category=${category}`)}
        info={cushion}
        images={images}
        imagesLoading={false}
        fabrics={[{ id: 1, name: "پارچه", code: "", color: "#eee" }]}
        selectedFabric={selectedFabric}
        setSelectedFabric={setSelectedFabric}
      />
    );
  } else {
    return (
      <CushionDetailDesktopContent
        navigate={() => navigate(`/catalog?category=${category}`)}
        info={cushion}
        images={images}
        imagesLoading={false}
        fabrics={[{ id: 1, name: "پارچه", code: "", color: "#eee" }]}
        selectedFabric={selectedFabric}
        setSelectedFabric={setSelectedFabric}
      />
    );
  }
};

export default CushionDetail;
