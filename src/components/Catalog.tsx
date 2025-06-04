import { useState, useEffect } from "react";
import {
  Grid,
  GridItem,
  Show,
  HStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SofaGrid from "./SofaGrid";
import Categories from "./Categories";
import DiningTableGrid from "./DiningTableGrid";
import CoffeeTableGrid from "./CoffeeTableGrid";
import CushionGrid from "./CushionGrid";
import MobileCategoriesDrawer from "./MobileCategoriesDrawer";
import Footer from "./Footer";

function Catalog() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category");
  const isLg = useBreakpointValue({ base: false, lg: true });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory
  );

  // Sync selectedCategory with URL query param on every change
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSelectedCategory(params.get("category"));
  }, [location.search]);

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Grid
        flex="1"
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main side "`,
        }}
        templateRows={{
          base: "80px 1fr",
          lg: "80px 1fr",
        }}
        templateColumns={{
          base: "1fr",
          lg: "1fr 250px",
        }}
        height="100%"
      >
        <GridItem
          area="nav"
          height="80px"
          position={isLg ? "static" : "fixed"}
          zIndex={1}
          top={isLg ? undefined : 0}
          width="100%"
        >
          <HStack
            justifyContent="space-between"
            paddingRight={4}
            height="100%"
            bg="gray.100"
          >
            <Navbar> </Navbar>
            {!isLg && (
              <MobileCategoriesDrawer
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            )}
          </HStack>
        </GridItem>
        <Show when={isLg}>
          <GridItem
            position="sticky"
            top={4}
            alignSelf="start"
            borderRadius="xl"
            bg="gray.100"
            area="side"
            padding={4}
            marginTop={4}
            marginRight={2}
            marginBottom={4}
          >
            <Categories
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </GridItem>
        </Show>
        <GridItem area="main" paddingY={4}>
          {selectedCategory === "diningTable" ? (
            <DiningTableGrid />
          ) : selectedCategory === "table" ? (
            <CoffeeTableGrid />
          ) : selectedCategory === "cushion" ? (
            <CushionGrid />
          ) : (
            <SofaGrid selectedCategory={selectedCategory} />
          )}
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Catalog;
