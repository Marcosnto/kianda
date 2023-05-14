import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import { AvatarMenuProps } from "@/helpers/CMS/types/components";

import { AddIcon, ArrowForwardIcon, LockIcon } from "@chakra-ui/icons";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function AvatarMenu() {
  const router = useRouter();
  const [, , removeCookie] = useCookies(["token"]);

  function MenuItemComponent({ icon, content, onClick }: AvatarMenuProps) {
    return (
      <MenuItem
        _hover={{ bg: "green.600", rounded: "8px", color: "white" }}
        icon={icon}
        onClick={onClick}
        mt="1"
      >
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
        <MenuList sx={{ color: "black", padding: "2" }}>
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
