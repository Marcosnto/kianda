import { AddIcon, ArrowForwardIcon, LockIcon } from "@chakra-ui/icons";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function AvatarMenu() {
  function MenuItemComponent(icon: React.ReactElement, content: string) {
    return (
      <MenuItem _hover={{ bg: "orange.50" }} icon={icon}>
        {content}
      </MenuItem>
    );
  }

  return (
    <span data-testid="menuAvatar">
      <Menu>
        <MenuButton
          as={Avatar}
          aria-label="Opções do usuário"
          icon={
            <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
          }
          variant="outline"
        />
        <MenuList sx={{ color: "black" }}>
          {MenuItemComponent(<AddIcon />, "Ver Perfil")}
          {MenuItemComponent(<LockIcon />, "Redefinir Senha")}
          {MenuItemComponent(<ArrowForwardIcon />, "Sair")}
        </MenuList>
      </Menu>
    </span>
  );
}
