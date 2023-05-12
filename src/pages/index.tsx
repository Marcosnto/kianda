import { useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import { Center } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/login"), 5000);
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
      <main style={{ background: "#1A240F" }}>
        <Center h="100vh" w="100%" color="#FFFF" textAlign="center">
          <p>
            Estamos trabalhando nesta página!
            <br />
            Em alguns segundos você será redirecionado para página de login :)
          </p>
        </Center>
      </main>
    </>
  );
}
