import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure, Box, Heading } from "@chakra-ui/react";
import DrawnerMenu from "@/components/CMS/Drawer";
import AvatarMenu from "@/components/CMS/AvatarMenu";
import { admin } from "@/data/menuOptionsPermitions";

export default function HeaderCMS() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      gap="4"
      boxShadow="sm"
      p="2.5"
      background="#FFFF"
    >
      <IconButton
        aria-label="Opções"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={() => onOpen()}
        display={["unset", "unset", "none"]}
      />
      <Heading as="h1" size="md" noOfLines={1}>
        Tornar-se Negro
      </Heading>
      <DrawnerMenu onClose={onClose} isOpen={isOpen} menuOptions={admin} />
      <AvatarMenu />
    </Box>
  );
}
