import { Avatar } from "@chakra-ui/react";
import Link from "next/link";

type LogoImage = {
  pathRedirect: string;
};

function LogoImage({ pathRedirect }: LogoImage) {
  return (
    <Link href={pathRedirect}>
      <Avatar
        size="xl"
        name="Logotipo: kianda escrito com fundo transparente"
        src="/img/logo.png"
      />
    </Link>
  );
}

export default LogoImage;
