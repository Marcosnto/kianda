import { HeaderCMSProps } from "@/helpers/CMS/types/components";

import DrawnerMenu from "@/components/CMS/Drawer";
import AvatarMenu from "@/components/CMS/AvatarMenu";

import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure, Box, Heading } from "@chakra-ui/react";

export default function HeaderCMS({ setCurrentComponent }: HeaderCMSProps) {
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
    >
      <IconButton
        aria-label="Opções"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={() => onOpen()}
        display={["unset", "unset", "none"]}
        _hover={{ bg: "green.700" }}
      />
      <Heading as="h1" size="md" noOfLines={1}>
        Kianda
      </Heading>
      <DrawnerMenu
        onClose={onClose}
        isOpen={isOpen}
        setCurrentComponent={setCurrentComponent}
      />
      <AvatarMenu />
    </Box>
  );
}
