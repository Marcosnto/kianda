import packageJson from "../../package.json";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Head from "next/head";

import Content from "@/components/CMS/Content";
import HeaderCMS from "@/components/CMS/HeaderCMS";
import Menu from "@/components/CMS/Menu";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Admin() {
  const [currentComponent, setCurrentComponent] = useState(<div>Teste</div>);
  const [cookie] = useCookies(["token"]);
  const router = useRouter();

  const isAuth = "token" in cookie;

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Kianda - Painel</title>
      </Head>
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
        gridTemplateColumns={[
          "none",
          "none",
          "1.3fr 3fr",
          "1fr 3fr",
          "0.8fr 3fr",
          "0.6fr 3fr",
        ]}
      >
        <GridItem area={"header"} background={"green.900"} color="#FFF">
          <HeaderCMS setCurrentComponent={setCurrentComponent} />
        </GridItem>

        <GridItem
          display={["none", "none", "block"]}
          area={"sidenav"}
          boxShadow="md"
        >
          <Menu setCurrentComponent={setCurrentComponent} />
        </GridItem>

        <GridItem area={"content"}>
          <Content>{currentComponent}</Content>
        </GridItem>

        <GridItem
          area={"footer"}
          background="green.900"
          color="#FFF"
          textAlign="center"
        >
          <div>Versão: {packageJson.version}</div>
        </GridItem>
      </Grid>
    </>
  );
}
