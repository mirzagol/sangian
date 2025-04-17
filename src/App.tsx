import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import SofaGrid from "./components/SofaGrid"; // Import your actual component
import Categories from "./components/Categories";
function App() {
  const isLg = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px",
      }}
    >
      <GridItem area="nav">
        <Navbar> </Navbar>
      </GridItem>
      <Show when={isLg}>
        <GridItem area="side" paddingX={5}>
          <Categories />
        </GridItem>
      </Show>

      <GridItem area="main">
        <SofaGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
