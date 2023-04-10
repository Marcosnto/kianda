import { AddIcon, ArrowForwardIcon, LockIcon } from "@chakra-ui/icons";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function AvatarMenu() {
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
        <MenuList>
          <MenuItem icon={<AddIcon />}>Ver Perfil</MenuItem>
          <MenuItem icon={<LockIcon />}>Redefinir Senha</MenuItem>
          <MenuItem icon={<ArrowForwardIcon />}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </span>
  );
}
