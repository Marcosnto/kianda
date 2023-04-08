import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure, Box, Heading } from "@chakra-ui/react";
import DrawnerMenu from "@/components/HeaderCMS/DrawerCMS";
import AvatarMenu from "@/components/HeaderCMS/AvatarCMS";

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
      />
      <Heading as="h1" size="md" noOfLines={1}>
        Tornar-se Negro
      </Heading>
      <DrawnerMenu onClose={onClose} isOpen={isOpen} />
      <AvatarMenu />
    </Box>
  );
}
