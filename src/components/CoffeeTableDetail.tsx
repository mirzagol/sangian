import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import useCoffeeTables from "../hooks/useCoffeeTables";
import CoffeeTableDetailMobileContent from "./CoffeeTableDetailMobileContent";
import CoffeeTableDetailDesktopContent from "./CoffeeTableDetailDesktopContent";

const CoffeeTableDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "table";
  const { coffeeTables } = useCoffeeTables();
  const [selectedFrame, setSelectedFrame] = useState<any>(null);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const coffeeTable = coffeeTables.find((t) => String(t.id) === id);

  useEffect(() => {
    if (coffeeTable) setSelectedFrame({ id: 1, name: "پایه چوبی" });
  }, [coffeeTable]);

  if (!coffeeTable) return null;

  const images = [coffeeTable.image_path];

  if (isMobile) {
    return (
      <CoffeeTableDetailMobileContent
        navigate={() => navigate(`/catalog?category=${category}`)}
        info={coffeeTable}
        images={images}
        imagesLoading={false}
        frames={[{ id: 1, name: "پایه چوبی" }]}
        selectedFrame={selectedFrame}
        setSelectedFrame={setSelectedFrame}
      />
    );
  } else {
    return (
      <CoffeeTableDetailDesktopContent
        navigate={() => navigate(`/catalog?category=${category}`)}
        info={coffeeTable}
        images={images}
        imagesLoading={false}
        frames={[{ id: 1, name: "پایه چوبی" }]}
        selectedFrame={selectedFrame}
        setSelectedFrame={setSelectedFrame}
      />
    );
  }
};

export default CoffeeTableDetail;
