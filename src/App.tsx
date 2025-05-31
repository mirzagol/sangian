import { useState } from "react";
import {
  Grid,
  GridItem,
  Show,
  HStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import SofaGrid from "./components/SofaGrid";
import Categories from "./components/Categories";
import DiningTableGrid from "./components/DiningTableGrid";
import BedSetGrid from "./components/BedSetGrid";
import CoffeeTableGrid from "./components/CoffeeTableGrid";
import CushionGrid from "./components/CushionGrid";
import OtherGrid from "./components/OtherGrid";
import MobileCategoriesDrawer from "./components/MobileCategoriesDrawer";
import Footer from "./components/Footer";

function App() {
  const isLg = useBreakpointValue({ base: false, lg: true });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
        <GridItem area="nav" height="80px">
          <HStack
            justifyContent="space-between"
            paddingRight={4}
            height="100%"
            bg="gray.100" // Updated to a warm, clean beige
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
            top={4} // Added margin on top when staying sticky
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
          {" "}
          {/* Added paddingTop */}
          {selectedCategory === "diningTable" ? (
            <DiningTableGrid />
          ) : selectedCategory === "bed" ? (
            <BedSetGrid />
          ) : selectedCategory === "table" ? (
            <CoffeeTableGrid />
          ) : selectedCategory === "cushion" ? (
            <CushionGrid />
          ) : selectedCategory === "other" ? (
            <OtherGrid />
          ) : (
            <SofaGrid selectedCategory={selectedCategory} />
          )}
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
}

export default App;
