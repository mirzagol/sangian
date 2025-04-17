import React, { useState } from "react";
import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import SofaGrid from "./components/SofaGrid";
import Categories from "./components/Categories";
import DiningTableGrid from "./components/DiningTableGrid";
import BedSetGrid from "./components/BedSetGrid";

function App() {
  const isLg = useBreakpointValue({ base: false, lg: true });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar> </Navbar>
      </GridItem>
      <Show when={isLg}>
        <GridItem area="side" paddingX={5}>
          <Categories onSelectCategory={setSelectedCategory} />
        </GridItem>
      </Show>
      <GridItem area="main">
        {selectedCategory === "diningTable" ? (
          <DiningTableGrid />
        ) : selectedCategory === "bed" ? (
          <BedSetGrid />
        ) : (
          <SofaGrid selectedCategory={selectedCategory} />
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
