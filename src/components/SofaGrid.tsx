import { SimpleGrid, Text } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import useSofas from "../hooks/useSofas";
import ItemCardSkeleton from "./ItemCardSkeleton";
import ItemCardContainer from "./ItemCardContainer";
import { useNavigate } from "react-router-dom";

interface SofaGridProps {
  selectedCategory: string | null; // Prop to filter sofas
}

const SofaGrid = ({ selectedCategory }: SofaGridProps) => {
  const { sofas, error, isLoading } = useSofas();
  const navigate = useNavigate();

  const categoryEnglishToPersian: Record<string, string> = {
    couch: "راحتی",
    classic: "کلاسیک",
    lShape: "ال",
  };

  const categoryPersianToEnglish: Record<string, string> = {
    راحتی: "couch",
    کلاسیک: "classic",
    ال: "lShape",
  };

  const filterCategory =
    selectedCategory && categoryEnglishToPersian[selectedCategory]
      ? categoryEnglishToPersian[selectedCategory]
      : selectedCategory;

  const filteredSofas = filterCategory
    ? sofas.filter((sofa) => sofa.types.includes(filterCategory)) // Filter sofas by category
    : sofas;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) {
    return <Text color="red.500">Failed to load sofas: {error}</Text>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      paddingX="10px"
      gap={3}
      style={{ direction: "rtl" }} // Stack items from right
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <ItemCardContainer key={skeleton}>
            <ItemCardSkeleton />
          </ItemCardContainer>
        ))}
      {filteredSofas.map((sofa) => (
        <ItemCardContainer key={sofa.id}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              // Always use English category in URL
              const englishCategory =
                selectedCategory && categoryPersianToEnglish[selectedCategory]
                  ? categoryPersianToEnglish[selectedCategory]
                  : selectedCategory || "";
              navigate(`/sofa/${sofa.id}?category=${englishCategory}`);
            }}
          >
            <ItemCard sofa={sofa} />
          </div>
        </ItemCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default SofaGrid;
