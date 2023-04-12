import { SmallCloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
} from "@chakra-ui/react";

import { userOptions } from "@/data/menuOptionsPermitions";
import MenuOptions from "../MenuOptions";

type DrawnerMenu = {
  onClose: () => void;
  isOpen: boolean;
  menuOptions: userOptions;
  setCurrentComponent: () => void;
};

export default function DrawerMenu({
  onClose,
  isOpen,
  menuOptions,
  setCurrentComponent,
}: DrawnerMenu) {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          borderBottomWidth="1px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          Painel
          <IconButton
            aria-label="Fechar menu lateral"
            icon={<SmallCloseIcon />}
            onClick={() => onClose()}
            background="none"
          />
        </DrawerHeader>
        <DrawerBody>
          {menuOptions.users.map((option) => (
            <MenuOptions
              key={option.key}
              displayName={option.displayName}
              icon={option.icon}
              setCurrentComponent={setCurrentComponent}
            />
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
