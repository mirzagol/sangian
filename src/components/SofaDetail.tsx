import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import useSofaOptions, { Frame, Fabric } from "../hooks/useSofaOptions";
import useSofaImages from "../hooks/useSofaImages";
import "react-loading-skeleton/dist/skeleton.css";
import SofaDetailMobile from "./SofaDetailMobile";
import SofaDetailDesktop from "./SofaDetailDesktop";
import SofaDetailMobileContent from "./SofaDetailMobileContent";
import SofaDetailDesktopContent from "./SofaDetailDesktopContent";

const SofaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "";
  const isMobile = useBreakpointValue({ base: true, lg: false }); // <-- Move here

  // Get all available frames/fabrics for this model
  const { frames, fabrics, isLoading: optionsLoading } = useSofaOptions(id);

  // State for selected frame/fabric
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);

  // Fetch images/info for the selected combo
  const {
    images,
    info,
    isLoading: imagesLoading,
  } = useSofaImages(id, selectedFrame?.id, selectedFabric?.id);

  // Track if it's the first load
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!optionsLoading && !imagesLoading && info) {
      isFirstLoad.current = false;
    }
  }, [optionsLoading, imagesLoading, info]);

  // Set default selection when options load
  useEffect(() => {
    if (frames.length && fabrics.length) {
      setSelectedFrame((prev) => prev || frames[0]);
      setSelectedFabric((prev) => prev || fabrics[0]);
    }
  }, [frames, fabrics]);

  // Show full skeleton on first load
  if ((optionsLoading || imagesLoading || !info) && isFirstLoad.current) {
    return isMobile ? <SofaDetailMobile /> : <SofaDetailDesktop />;
  }

  // Show only image skeleton when changing colors
  const categoryMap: Record<string, string> = {
    راحتی: "couch",
    کلاسیک: "classic",
    ال: "lShape",
  };
  const englishCategory = categoryMap[category] || category || "";

  const goBackToCatalog = () => {
    if (englishCategory) {
      navigate(`/catalog?category=${englishCategory}`);
    } else {
      navigate("/catalog");
    }
  };

  if (isMobile) {
    return (
      <SofaDetailMobileContent
        navigate={goBackToCatalog}
        info={info}
        images={images}
        imagesLoading={imagesLoading}
        frames={frames}
        fabrics={fabrics}
        selectedFrame={selectedFrame}
        selectedFabric={selectedFabric}
        setSelectedFrame={setSelectedFrame}
        setSelectedFabric={setSelectedFabric}
      />
    );
  } else {
    return (
      <SofaDetailDesktopContent
        navigate={goBackToCatalog}
        info={info}
        images={images}
        imagesLoading={imagesLoading}
        frames={frames}
        fabrics={fabrics}
        selectedFrame={selectedFrame}
        selectedFabric={selectedFabric}
        setSelectedFrame={setSelectedFrame}
        setSelectedFabric={setSelectedFabric}
      />
    );
  }
};

export default SofaDetail;
