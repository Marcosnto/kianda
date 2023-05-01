import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import { AddIcon, ArrowForwardIcon, LockIcon } from "@chakra-ui/icons";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

type AvatarMenuProps = {
  icon: React.ReactElement;
  content: string;
  onClick?: () => void;
};

export default function AvatarMenu() {
  const router = useRouter();
  const [, , removeCookie] = useCookies(["token"]);

  function MenuItemComponent({ icon, content, onClick }: AvatarMenuProps) {
    return (
      <MenuItem _hover={{ bg: "orange.50" }} icon={icon} onClick={onClick}>
        {content}
      </MenuItem>
    );
  }

  function logout() {
    removeCookie("token");
    router.push("/login");
  }

  return (
    <span data-testid="menuAvatar">
      <Menu>
        <MenuButton
          as={Avatar}
          aria-label="Opções do usuário"
          icon={
            <Avatar
              name="Adelmo Filho"
              src="https://pbs.twimg.com/profile_images/1610774407852560385/i0ONtDeh_400x400.jpg"
            />
          }
          variant="outline"
        />
        <MenuList sx={{ color: "black" }}>
          {MenuItemComponent({ icon: <AddIcon />, content: "Ver Perfil" })}
          {MenuItemComponent({
            icon: <LockIcon />,
            content: "Redefinir Senha",
          })}
          {MenuItemComponent({
            icon: <ArrowForwardIcon />,
            content: "Sair",
            onClick: () => logout(),
          })}
        </MenuList>
      </Menu>
    </span>
  );
}
