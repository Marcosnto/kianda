import { useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import { Center } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <>
      <Head>
        <title>Kianda</title>
        <meta
          name="description"
          content="Site de divulgação de artigos e publicação da área de psicologia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ background: "#28100B" }}>
        <Center h="100vh" w="100%" color="#FFFF">
          <h1>Em construção!</h1>
        </Center>
      </main>
    </>
  );
}
