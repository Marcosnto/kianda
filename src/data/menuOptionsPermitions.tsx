import { Icon } from "@chakra-ui/react";
import { IoPeopleOutline, IoBookOutline } from "react-icons/io5";

export type OptionsProps = {
  key: string;
  icon: JSX.Element;
  displayName: string;
  render?: JSX.Element;
};

export type userOptions = {
  user: string;
  options: Array<OptionsProps>;
};

function getIcon(iconName: any) {
  return <Icon as={iconName} w="5" h="5" />;
}

export const admin: userOptions = {
  user: "admin",
  options: [
    {
      key: "user-admin-01",
      icon: getIcon(IoPeopleOutline),
      displayName: "Users",
    },
    {
      key: "blog-admin-01",
      icon: getIcon(IoBookOutline),
      displayName: "Blog",
    },
  ],
};
