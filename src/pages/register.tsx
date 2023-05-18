import Head from "next/head";

import UserRegister from "@/components/CMS/Form/User/Register";
import { Box } from "@chakra-ui/react";

export default function Register() {
  return (
    <Box background="green.900">
      <Head>
        <title>Kianda - Registrar-se</title>
      </Head>
      <UserRegister />
    </Box>
  );
}
