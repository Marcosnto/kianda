import { LogoImage } from "@/helpers/CMS/types/components";
import { Avatar } from "@chakra-ui/react";
import Link from "next/link";

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
