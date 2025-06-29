import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useCoffeeTableOptions from "../hooks/useCoffeeTableOptions";
import useCoffeeTableImages from "../hooks/useCoffeeTableImages";
import CoffeeTableDetailMobileContent from "./CoffeeTableDetailMobileContent";
import CoffeeTableDetailDesktopContent from "./CoffeeTableDetailDesktopContent";

const CoffeeTableDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "table";
  const isMobile = useBreakpointValue({ base: true, lg: false });

  // Fetch options (frames) for this coffee table model
  const {
    options,
    frames,
    isLoading: optionsLoading,
  } = useCoffeeTableOptions(id);
  // Select first frame by default
  const [selectedFrame, setSelectedFrame] = useState(frames[0] || null);

  // Update selectedFrame if frames change (e.g. after fetch)
  useEffect(() => {
    if (
      frames.length &&
      (!selectedFrame || !frames.find((f) => f.id === selectedFrame.id))
    ) {
      setSelectedFrame(frames[0]);
    }
  }, [frames]);

  // Fetch images for the selected frame
  const {
    images,
    info,
    isLoading: imagesLoading,
  } = useCoffeeTableImages(id, selectedFrame?.id);

  const goBackToCatalog = () => {
    navigate(`/catalog?category=${category}`);
  };

  if (!info && !optionsLoading) return null;

  // Helper to map option to info-like structure if needed
  const mapOptionToInfo = (option: any) =>
    option
      ? {
          id: option.id,
          name: option.model_name,
          imagePath: "",
          frame: option.frame,
        }
      : null;

  const ContentProps = {
    navigate: goBackToCatalog,
    info: info || mapOptionToInfo(options[0]), // fallback to mapped option if images/info not loaded yet
    images,
    imagesLoading: imagesLoading || optionsLoading,
    frames,
    selectedFrame,
    setSelectedFrame,
  };

  if (isMobile) {
    return <CoffeeTableDetailMobileContent {...ContentProps} />;
  } else {
    return <CoffeeTableDetailDesktopContent {...ContentProps} />;
  }
};

export default CoffeeTableDetail;
