import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure, Box, Heading } from "@chakra-ui/react";
import DrawnerMenu from "@/components/CMS/Drawer";
import AvatarMenu from "@/components/CMS/AvatarMenu";

export default function HeaderCMS({ setCurrentComponent }: any) {
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
        Tornar-se Negro
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
