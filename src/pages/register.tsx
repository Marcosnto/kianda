import Head from "next/head";

import UserRegister from "@/components/CMS/Forms/User/AutoRegister";
import { Box, Center } from "@chakra-ui/react";
import LogoImage from "@/components/CMS/LogoImage";

export default function Register() {
  return (
    <Box background="green.900">
      <Head>
        <title>Kianda - Registrar-se</title>
      </Head>
      <Center flexDirection="column" pt="15" pb="15" gap="5">
        <LogoImage pathRedirect="/login" />
        <UserRegister />
      </Center>
    </Box>
  );
}
