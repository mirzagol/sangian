import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import SofaGrid from "./components/SofaGrid"; // Import your actual component
function App() {
  const isLg = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar> </Navbar>
      </GridItem>
      <Show when={isLg}>
        <GridItem area="side" bg="tomato">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        <SofaGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
