import HeaderCMS from "@/components/CMS/HeaderCMS";
import Menu from "@/components/CMS/Menu";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Admin() {
  return (
    <Grid
      h="100vh"
      templateAreas={[
        `
        "header header"
        "content content"
        "content content"
        "footer footer"
      `,
        `
        "header header"
        "sidenav content"
        "sidenav content"
        "footer footer"
      `,
      ]}
      gridTemplateRows={"4.3rem auto auto 2rem"}
      gridTemplateColumns={"1fr 2fr"}
    >
      <GridItem area={"header"}>
        <HeaderCMS />
      </GridItem>

      <GridItem display={["none", "block"]} area={"sidenav"}>
        <Menu />
      </GridItem>

      <GridItem area={"content"} background="gray.100">
        <div>content</div>
      </GridItem>

      <GridItem area={"footer"} background="gray.100">
        <div>footer</div>
      </GridItem>
    </Grid>
  );
}
