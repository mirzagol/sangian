import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import useDiningTables from "../hooks/useDiningTables";
import DiningTableDetailMobileContent from "./DiningTableDetailMobileContent";
import DiningTableDetailDesktopContent from "./DiningTableDetailDesktopContent";

const DiningTableDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "diningTable";
  const { diningTables } = useDiningTables();
  const [selectedFrame, setSelectedFrame] = useState<any>(null);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const diningTable = diningTables.find((t) => String(t.id) === id);

  useEffect(() => {
    if (diningTable) setSelectedFrame({ id: 1, name: "پایه چوبی" });
  }, [diningTable]);

  if (!diningTable) return null;

  const images = [diningTable.image_path];

  if (isMobile) {
    return (
      <DiningTableDetailMobileContent
        navigate={() => navigate(`/catalog?category=${category}`)}
        info={diningTable}
        images={images}
        imagesLoading={false}
        frames={[{ id: 1, name: "پایه چوبی" }]}
        selectedFrame={selectedFrame}
        setSelectedFrame={setSelectedFrame}
      />
    );
  } else {
    return (
      <DiningTableDetailDesktopContent
        navigate={() => navigate(`/catalog?category=${category}`)}
        info={diningTable}
        images={images}
        imagesLoading={false}
        frames={[{ id: 1, name: "پایه چوبی" }]}
        selectedFrame={selectedFrame}
        setSelectedFrame={setSelectedFrame}
      />
    );
  }
};

export default DiningTableDetail;
